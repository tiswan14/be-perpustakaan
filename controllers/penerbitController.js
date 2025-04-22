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
    res.send('get all penerbit')
}

export const getPenerbitById = async (req, res) => {
    res.send('get penerbit by id')
}

export const updatePenerbit = async (req, res) => {
    res.send('update penerbit')
}

export const deletePenerbit = async (req, res) => {
    res.send('delete penerbit')
}
