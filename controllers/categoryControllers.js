export const createCategory = (req, res) => {
    res.send('Create category')
}

export const getAllCategories = (req, res) => {
    res.send('Get all categories')
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
