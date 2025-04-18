import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
    {
        nama_kategori: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
)

const Category = mongoose.model('Category', categorySchema)

export default Category
