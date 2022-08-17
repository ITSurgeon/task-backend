const commentService = require('../services/comment')

const getMyComments = async (req, res) => {
    try {
        const comments = await commentService.getUserComments(req.user.userId)
        res.json(comments)

    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const getOneComment = async (req, res) => {
    try {
        const comment = await commentService.getComment(req.params.id)
        res.json(comment)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const updateComment = async (req, res) => {
    try {
        const result = await commentService.updateComment(req.params.id, req.user.userId, req.body.content)

        res.status(result.status).json(result.message)

    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const deleteComment = async (req, res) => {
    try {
        const result = await commentService.deleteComment(req.params.id, req.user.userId)

        res.status(result.status).json(result.message)

    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const getPostComments = async (req, res) => {
    try {
        const comments = await commentService.getPostComments(req.params.id)
        res.json(comments)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const createPostComment = async (req, res) => {
    try {
        const {content} = req.body

        const comment = await commentService.createPostComment(
            req.user.userId,
            req.params.id,
            content)

        res.status(201).json({comment})

    } catch
        (e) {
        res.status(500).json({message: e.message})
    }
}

module.exports = {
    getMyComments,
    getOneComment,
    updateComment,
    deleteComment,
    getPostComments,
    createPostComment
}