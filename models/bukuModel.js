import mongoose from 'mongoose'

const bukuSchema = new mongoose.Schema(
    {
        judul: {
            type: String,
            unique: true,
            index: true,
        },

        penulis: {
            type: String,
        },

        stok: {
            type: Number,
            min: [0, 'Stok tidak bisa kurang dari 0'],
        },

        status: {
            type: String,
            enum: ['tersedia', 'dipinjam'],
            default: 'tersedia',
        },

        kategori: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        },

        penerbit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Penerbit',
        },

        cover: {
            type: String,
        },
    },
    { timestamps: true }
)

const Buku = mongoose.model('Buku', bukuSchema)

export default Buku
