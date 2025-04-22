import mongoose from 'mongoose'
import Penerbit from '../models/penerbitModel.js'

export const createPenerbit = async (req, res) => {
    try {
        const { nama_penerbit, tahun_terbit } = req.body

        if (!nama_penerbit || !tahun_terbit) {
            return res.status(400).json({
                success: false,
                message: 'Nama penerbit dan tahun terbit harus diisi!',
            })
        }

        if (isNaN(tahun_terbit) || tahun_terbit > new Date().getFullYear()) {
            return res.status(400).json({
                success: false,
                message: 'Tahun terbit tidak valid!',
            })
        }

        const createdPenerbit = await Penerbit.create({
            nama_penerbit,
            tahun_terbit,
        })

        return res.status(201).json({
            success: true,
            message: 'Penerbit berhasil ditambahkan!',
            data: createdPenerbit,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message:
                'Terjadi kesalahan saat menambahkan penerbit: ' + error.message,
        })
    }
}

export const getAllPenerbit = async (req, res) => {
    try {
        const penerbits = await Penerbit.find()

        if (!penerbits) {
            return res.status(404).json({
                success: false,
                message: 'Penerbit tidak ditemukan!',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan semua penerbit!',
            data: penerbits,
        })
    } catch (error) {
        console.error('Error fetching penerbit:', error)
        res.status(500).json({
            success: false,
            message:
                'Terjadi kesalahan saat mengambil data penerbit: ' +
                error.message,
        })
    }
}

export const getPenerbitById = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'ID penerbit tidak valid!',
            })
        }

        const penerbit = await Penerbit.findById(id)

        if (!penerbit) {
            return res.status(404).json({
                success: false,
                message: 'Penerbit tidak ditemukan!',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan penerbit!',
            data: penerbit,
        })
    } catch (error) {
        console.error('Error fetching penerbit:', error)
        return res.status(500).json({
            success: false,
            message:
                'Terjadi kesalahan saat mengambil data penerbit: ' +
                error.message,
        })
    }
}

export const updatePenerbit = async (req, res) => {
    try {
        const { id } = req.params
        const updatedData = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'ID penerbit tidak valid!',
            })
        }

        if (!updatedData || Object.keys(updatedData).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Tidak ada data yang diperbarui!',
            })
        }

        const updatedPenerbit = await Penerbit.findByIdAndUpdate(
            id,
            updatedData,
            { new: true }
        )

        if (!updatedPenerbit) {
            return res.status(404).json({
                success: false,
                message: 'Penerbit tidak ditemukan!',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Penerbit berhasil diperbarui!',
            data: updatedPenerbit,
        })
    } catch (error) {
        console.error('Error updating penerbit:', error)
        return res.status(500).json({
            success: false,
            message:
                'Terjadi kesalahan saat memperbarui penerbit: ' + error.message,
        })
    }
}

export const deletePenerbit = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'ID penerbit tidak valid!',
            })
        }

        const deletedPenerbit = await Penerbit.findByIdAndDelete(id)

        if (!deletedPenerbit) {
            return res.status(404).json({
                success: false,
                message: 'Penerbit tidak ditemukan!',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Penerbit berhasil dihapus!',
            data: deletedPenerbit,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:
                'Terjadi kesalahan saat menghapus penerbit: ' + error.message,
        })
    }
}
