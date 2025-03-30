import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: 'perpus',
        })
        console.log('✅ Database connected successfully!')
    } catch (error) {
        console.error('❌ Database connection failed:', error)
        process.exit(1)
    }
}

mongoose.connection.on('error', (err) => {
    console.error('⚠️ Database connection error:', err)
})

export default connectDB
