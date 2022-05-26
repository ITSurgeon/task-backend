const {Router} = require('express')

const Post = require('../models/Post')
const Comment = require('../models/Comment')

const auth = require('../middlewares/auth.middleware')

const router = Router()

router.post('/', auth, async (req, res) => {
    try {
        const {content} = req.body
        const post = new Post({userId: req.user.userId, content})

        await post.save()

        res.status(201).json({post})

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find({userId: req.user.userId})
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

router.put('/:id', auth, async (req, res) => {
    try {
        const postId = req.params.id,
            userId = req.user.userId,
            content = req.body.content
        const post = await Post.findById(postId)
        if (post.userId === userId) {
            post.content = content
            await post.save()
            res.json({message: "Post successfully updated"})
        } else {
            res.status(403).json({message: "It's not your post!"})
        }
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.delete('/:id', auth, async (req, res) => {
    try {
        const postId = req.params.id,
            userId = req.user.userId
        const post = await Post.findById(postId)
        if (post.userId === userId) {
            await Post.findByIdAndDelete(postId)
            res.json({message: "Post successfully deleted"})
        } else {
            res.status(403).json({message: "It's not your post!"})
        }
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


router.get('/:id/comments', auth, async (req, res) => {
    try {
        const comments = await Comment.find({userId: req.params.id})
        res.json(comments)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.post('/:id/comments', auth, async (req, res) => {
    try {
        const {content} = req.body

        const comment = new Comment({
            userId: req.user.userId,
            content,
            postId: req.params.id
        })

        await comment.save()

        res.status(201).json({comment})

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


module.exports = router