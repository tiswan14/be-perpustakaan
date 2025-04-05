import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import authRouter from './routes/authRouter.js'

dotenv.config()

const app = express()
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

app.get('/', (req, res) => {
    res.send('Hello World ')
})

startServer()
