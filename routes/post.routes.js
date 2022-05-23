const {Router} = require('express')

const Post = require('../models/Post')
const auth = require('../middleware/auth.middleware')

const router = Router()

router.post('/write', auth, async (req, res) => {
    try {
        const {content} = req.body
        const post = new Post({author: req.user.userId, content: content})

        await post.save()

        res.status(201).json({post})

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find({author: req.user.userId})
        res.json(posts)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/user/:userId', auth, async (req, res) => {
    try {
        const posts = await Post.find({author: req.params.userId})
        res.json(posts)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

module.exports = router