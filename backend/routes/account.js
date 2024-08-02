import Router from 'express'
import auth from '../middleware/auth.js';
import Account from '../db/account.js';
import mongoose from 'mongoose';
import transtionBody from '../zod/transtionBody.js';

const router = Router();

router.get('/balance', auth, async (req, res) => {
    try {
        const account = await Account.findOne({
            user: req.userId
        })

        if (!account) {
            return res.status(400).json({
                msg: "Account not found"
            })
        }
        res.status(200).json({
            Balance: account.balance
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            msg: "Server error"
        })
    }
})

router.post('/transfer', auth, async (req, res) => {
    try {
        const session = await mongoose.startSession()
        session.startTransaction()

        const { data } = transtionBody.safeParse(req.body)

        if (!data) {
            return res.status(411).json({
                msg: "Amount can't be zero or less than zero / Incorrect data type"
            });
        }

        if (req.userId == req.body.to) {
            return res.status(400).json({
                msg: "You can't send money to yourself"
            });
        }

        const account = await Account.findOne({ user: req.userId }).session(session)

        if (!account || account.balance < req.body.amount) {
            await session.abortTransaction()
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        const toAccount = await Account.findOne({ user: req.body.to }).session(session)

        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        await Account.updateOne({ user: req.userId }, {
            $inc: { balance: -req.body.amount }
        }).session(session)

        await Account.updateOne({ user: req.body.to }, {
            $inc: { balance: req.body.amount }
        }).session(session)

        await session.commitTransaction();
        res.json({
            msg: "Transtion complete",
            detail: `Amount ${req.body.amount} has been sucessfully credited to user ${toAccount.user}`
        })
    }
    catch (err) {
        console.error(err)
        res.status(400).json({
            msg: "Transtion failed"
        })
    }
})

export default router;