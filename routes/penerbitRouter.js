import express from 'express'

import {
    createPenerbit,
    getAllPenerbit,
    getPenerbitById,
    updatePenerbit,
    deletePenerbit,
} from '../controllers/penerbitController.js'

const penerbitRouter = express.Router()

penerbitRouter.post('/', createPenerbit)
penerbitRouter.get('/', getAllPenerbit)
penerbitRouter.get('/:id', getPenerbitById)
penerbitRouter.put('/:id', updatePenerbit)
penerbitRouter.delete('/:id', deletePenerbit)

export default penerbitRouter