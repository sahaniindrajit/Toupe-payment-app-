import Router from 'express'
import User from '../db/user.js'
import bycrpt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config';
import signinBody from '../zod/signinBody.js'
import signupBody from '../zod/signupBody.js'
import updateBody from '../zod/updateBody.js'
import auth from './auth.js';

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
        const token = jwt.sign(payLoad, process.env.JWT_PASSWORD);

        return res.status(200).json({
            msg: "signup sucessfull",
            token: token
        })

    }
    catch (err) {
        console.log(err)
        res.status(403).json({
            msg: err
        })
    }
})

router.get('/signin', async (req, res) => {
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

        return res.status(200).json({
            msg: "signin sucessfull",
            token: token
        })
    }
    catch (err) {
        console.log(err)
        res.status(403).json({
            msg: "Server error"
        })
    }
})

router.put('/', auth, async (req, res) => {
    const { data } = updateBody.safeParse(req.body);
    if (!data) {
        return res.status(411).json({
            msg: "Error while updating information"
        })
    }
    if (data.password) {
        const hash = await bycrpt.hash(req.body.password, 10);
        req.body.password = hash;
        console.log(req.body)
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



export default router