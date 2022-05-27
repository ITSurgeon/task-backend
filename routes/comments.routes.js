const {Router} = require('express')

const Comment = require('../models/Comment')

const auth = require('../middlewares/auth.middleware')
const Post = require("../models/Post");

const router = Router()

router.get('/', auth, async (req, res) => {
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

router.put('/:id', auth, async (req, res) => {
    try {
        const commentId = req.params.id,
            userId = req.user.userId,
            content = req.body.content
        const comment = await Comment.findById(commentId)

        if (comment.userId === userId) {
            comment.content = content
            await comment.save()
            res.json({message: "Comment successfully updated"})
        } else {
            res.status(403).json({message: "It's not your comment!"})
        }
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.delete('/:id', auth, async (req, res) => {
    try {
        const commentId = req.params.id,
            userId = req.user.userId
        const comment = await Comment.findById(commentId)

        if (comment.userId === userId) {
            await Comment.findByIdAndDelete(commentId)
            res.json({message: "Comment successfully deleted"})
        } else {
            res.status(403).json({message: "It's not your comment!"})
        }
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

module.exports = router