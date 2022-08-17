const { Router } = require('express')

const auth = require('../middlewares/auth.middleware')

const router = Router()

const {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
} = require('../controllers/posts')

const { getPostComments, createPostComment } = require('../controllers/comments')

router.post('/', auth, createPost)

router.get('/', auth, getAllPosts)

router.get('/:id', auth, getPost)

router.put('/:id', auth, updatePost)

router.delete('/:id', auth, deletePost)


router.get('/:id/comments', auth, getPostComments)

router.post('/:id/comments', auth, createPostComment)


module.exports = router