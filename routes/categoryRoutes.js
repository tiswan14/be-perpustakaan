import express from 'express'

import {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
} from '../controllers/categoryControllers.js'

const categoryRouter = express.Router()

categoryRouter.post('/', createCategory)
categoryRouter.get('/', getAllCategories)
categoryRouter.get('/:id', getCategoryById)
categoryRouter.put('/:id', updateCategory)
categoryRouter.delete('/:id', deleteCategory)

export default categoryRouter
