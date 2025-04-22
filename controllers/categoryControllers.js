import Category from '../models/categoryModel.js'

export const createCategory = async (req, res) => {
    const newCategori = await Category.create(req.body)

    return res.status(201).json({
        success: true,
        message: 'Kategori berhasil ditambahkan!.',
        data: newCategori,
    })
}

export const getAllCategories = async (req, res) => {
    const categories = await Category.find()
    res.status(200).json({
        success: true,
        message: 'Berhasil mendapatkan semua kategori!.',
        data: categories,
    })
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
