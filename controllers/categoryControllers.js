import Category from '../models/categoryModel.js'
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

        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan semua kategori!',
            data: categories,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const getCategoryById = (req, res) => {
    const { id } = req.params
    res.send(`Get category with ID ${id}`)
}

export const updateCategory = (req, res) => {
    const { id } = req.params
    res.send(`Update category with ID ${id}`)
}

export const deleteCategory = (req, res) => {
    const { id } = req.params
    res.send(`Delete category with ID ${id}`)
}
