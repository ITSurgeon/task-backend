const jwt = require('jsonwebtoken')

require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            return res.status(401).json({message: 'User unauthorized'})
        }

        const verified = jwt.verify(token, JWT_SECRET)
        req.user = verified
        next()

    } catch (e) {
        return res.status(401).json({message: 'User unauthorized'})
    }
}