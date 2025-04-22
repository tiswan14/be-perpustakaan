import mongoose from 'mongoose'

const penerbitSchema = new mongoose.Schema(
    {
        nama_penerbit: {
            type: String,
            required: [true, 'Nama penerbit harus diisi'],
            unique: [true, 'Penerbit sudah ada'],
            trim: true,
        },
        tahun_terbit: {
            type: Number,
            required: [true, 'Tahun terbit harus diisi'],
        },
    },
    {
        timestamps: true,
    }
)

const Penerbit =
    mongoose.models.Penerbit || mongoose.model('Penerbit', penerbitSchema)

export default Penerbit
