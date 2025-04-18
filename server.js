import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/mongodb.js'
import authRouter from './routes/authRouter.js'
import authMiddleware from './middleware/authMiddleware.js'

dotenv.config()

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

const startServer = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`)
        })
    } catch (error) {
        console.error('❌ Failed to start server:', error)
        process.exit(1)
    }
}

app.use('/api/auth', authRouter)
app.use('/api/category', authMiddleware, categoryRouter)

startServer()
