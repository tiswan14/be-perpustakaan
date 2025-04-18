import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'

import {
    registerUser,
    loginUser,
    logoutUser,
    getUser,
} from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.post('/logout', logoutUser)
authRouter.get('/profile', authMiddleware, getUser)

export default authRouter
