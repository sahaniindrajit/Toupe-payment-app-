import Router from 'express'
import userRoute from './user.js'

const router = Router()

router.use('/user', userRoute)

export default router