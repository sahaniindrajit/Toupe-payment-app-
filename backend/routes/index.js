import Router from 'express'
import userRoute from './user.js'
import accountRouter from './account.js'

const router = Router()

router.use('/user', userRoute)
router.use('/account', accountRouter)

export default router