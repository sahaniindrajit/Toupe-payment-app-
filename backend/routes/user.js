import Router from 'express'
import User from '../db/user.js'
import bycrpt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config';
import signinBody from '../zod/signinBody.js'
import signupBody from '../zod/signupBody.js'
import updateBody from '../zod/updateBody.js'
import auth from '../middleware/auth.js';
import Account from '../db/account.js';


const router = Router()

router.post('/signup', async (req, res) => {
    const { data } = signupBody.safeParse(req.body);

    if (!data) {
        return res.status(411).json({
            msg: "Fill all data/ Incorrect data type"
        });
    }

    const oldUser = await User.findOne({
        username: req.body.username
    })

    if (oldUser) {
        return res.status(403).json({
            msg: "user already exist"
        });
    }

    try {
        const hash = await bycrpt.hash(req.body.password, 10);

        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: hash
        })


        const payLoad = {
            username: user.username,
            userID: user._id

        }

        const userID = user._id;
        await Account.create({
            user: userID,
            balance: 1 + Math.random() * 10000
        })

        const token = jwt.sign(payLoad, process.env.JWT_PASSWORD);

        res.cookie("access_token", token, {
            expires: new Date(Date.now() + 250000000),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'None'
        }).status(200).json({
            msg: "Signup success"
        })

    }
    catch (err) {
        console.log(err)
        res.status(403).json({
            msg: err
        })
    }
})

router.post('/signin', async (req, res) => {
    const { data } = signinBody.safeParse(req.body);

    if (!data) {
        return res.status(411).json({
            msg: "Fill all data/ Incorrect data type"
        });
    }

    try {
        const user = await User.findOne({
            username: req.body.username
        })
        if (!user) {
            return res.status(404).json({
                msg: "User does not exist "
            })
        }


        const passwordVerify = await bycrpt.compare(req.body.password, user.password);
        if (!passwordVerify) {
            return res.status(403).json({
                msg: "Invalid credentials"
            });
        }

        const payLoad = {
            username: user.username,
            userID: user._id

        }
        const token = jwt.sign(payLoad, process.env.JWT_PASSWORD);

        return res.cookie("access_token", token, {
            expires: new Date(Date.now() + 250000000),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'None'
        }).status(200).json({
            msg: "Signin success"
        })
    }
    catch (err) {
        console.log(err)
        res.status(403).json({
            msg: "Server error"
        })
    }
})

router.put('/update', auth, async (req, res) => {
    const { data } = updateBody.safeParse(req.body);
    if (!data) {
        return res.status(411).json({
            msg: "Error while updating information"
        })
    }
    if (data.password) {
        const hash = await bycrpt.hash(req.body.password, 10);
        req.body.password = hash;

    }


    try {
        await User.updateOne({
            _id: req.userId
        }, req.body);

        res.status(200).json({
            msg: "Updated successfully"
        })
    }

    catch (err) {
        console.log(err)
        res.status(403).json({
            msg: err
        })
    }
})

router.get('/bulk', auth, async (req, res) => {
    const filter = req.query.filter || ""
    try {
        const users = await User.find({
            $or: [{
                firstName: {
                    "$regex": filter
                }
            }, {
                lastName: {
                    "$regex": filter
                }
            }]
        })

        if (users.length == 0) {
            return res.status(200).json({
                msg: "No user found"
            })
        }

        res.status(200).json({
            msg: "user found",
            user: users.map((user) => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        })
    }
    catch (err) {
        console.log(err)
        res.status(403).json({
            msg: "server error"
        })
    }
})

export default router