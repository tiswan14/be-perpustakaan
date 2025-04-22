import Category from '../models/categoryModel.js'
import mongoose from 'mongoose'
import moment from 'moment-timezone'

export const createCategory = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body)

        const categoryWithIndonesiaTime = {
            ...newCategory.toObject(),
            createdAt: moment(newCategory.createdAt)
                .tz('Asia/Jakarta')
                .format(),
            updatedAt: moment(newCategory.updatedAt)
                .tz('Asia/Jakarta')
                .format(),
        }

        return res.status(201).json({
            success: true,
            message: 'Kategori berhasil ditambahkan!',
            data: categoryWithIndonesiaTime,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find()

        const formattedCategories = categories.map((category) => ({
            ...category.toObject(),
            createdAt: moment(category.createdAt)
                .tz('Asia/Jakarta')
                .format('YYYY-MM-DD HH:mm:ss'),
            updatedAt: moment(category.updatedAt)
                .tz('Asia/Jakarta')
                .format('YYYY-MM-DD HH:mm:ss'),
        }))

        return res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan semua kategori!',
            data: formattedCategories,
        })
    } catch (error) {
        console.error('Error fetching categories:', error)
        return res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan saat mengambil data kategori',
        })
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'ID kategori tidak valid!',
            })
        }

        const category = await Category.findById(id)

        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Kategori tidak ditemukan!',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan kategori!',
            data: category,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const updateCategory = (req, res) => {
    const { id } = req.params
    res.send(`Update category with ID ${id}`)
}

export const deleteCategory = (req, res) => {
    const { id } = req.params
    res.send(`Delete category with ID ${id}`)
}
