import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const registerUser = async (req, res) => {
    const { nama, email, nim, password } = req.body

    if (!nama || !email || !nim || !password) {
        return res.status(400).json({
            success: false,
            message: 'Semua input harus di isi!',
        })
    }

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Email sudah terdaftar!',
            })
        }

        const totalUsers = await User.countDocuments()

        let role = 'anggota'
        if (totalUsers === 0) role = 'admin'
        else if (totalUsers === 1) role = 'petugas'

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            nama,
            email,
            nim,
            password: hashedPassword,
            role,
        })
        await user.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.status(201).json({
            success: true,
            message: 'Register berhasil!',
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const loginUser = (req, res) => {
    res.send('Login user')
}

export const logoutUser = (req, res) => {
    res.send('Logout user')
}

export const getUser = (req, res) => {
    res.send('Get user')
}
