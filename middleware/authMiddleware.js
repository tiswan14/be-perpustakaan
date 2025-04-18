import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Token tidak ada. Silahkan login terlebih dahulu!',
        })
    }

    try {
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET)

        if (tokenDecoded.id) {
            req.body.UserId = tokenDecoded.id
        } else {
            return res.status(401).json({
                success: false,
                message: 'Akses ditolak, token tidak valid!',
            })
        }

        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export default authMiddleware
