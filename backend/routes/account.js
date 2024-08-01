import Router from 'express'
import auth from './auth.js';
import Account from '../db/account.js';

const router = Router();

router.get('/balance', auth, async (req, res) => {
    try {
        const account = await Account.findOne({
            userid: req.userID
        })
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

export default router;