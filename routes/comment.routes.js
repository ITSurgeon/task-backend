const {Router} = require('express')

const Comment = require('../models/Comment')

const auth = require('../middleware/auth.middleware')

const router = Router()

router.post('/write', auth, async (req, res) => {
    try {
        const {content, postId} = req.body

        const comment = new Comment({
            author: req.user.userId,
            content: content,
            post: postId
        })

        await comment.save()

        res.status(201).json({comment})

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const comments = await Comment.find()
        res.json(comments)

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/own', auth, async (req, res) => {
    try {
        const comments = await Comment.find({author: req.user.userId})
        res.json(comments)

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
        res.json(comment)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/post/:id', auth, async (req, res) => {
    try {
        const comments = await Comment.find({post: req.params.id})
        res.json(comments)

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/author/:id', auth, async (req, res) => {
    try {
        const comments = await Comment.find({author: req.params.id})
        res.json(comments)

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

module.exports = router