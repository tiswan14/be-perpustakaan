import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    nim: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ['admin', 'petugas', 'anggota'],
        default: 'anggota',
    },
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel
