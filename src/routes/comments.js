const {Router} = require('express')

const auth = require('../middlewares/auth.middleware')

const router = Router()

const {
    getOneComment,
    getMyComments,
    updateComment,
    deleteComment
} = require('../controllers/comments')

router.get('/', auth, getMyComments)

router.get('/:id', auth, getOneComment)

router.put('/:id', auth, updateComment)

router.delete('/:id', auth, deleteComment)

module.exports = router