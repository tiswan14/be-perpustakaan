import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
    {
        nama_kategori: {
            type: String,
            required: [true, 'Nama kategori harus diisi'],
            unique: [true, 'Kategori sudah ada'],
        },
    },
    {
        timestamps: true,
    }
)

const Category = mongoose.model('Category', categorySchema)

export default Category
