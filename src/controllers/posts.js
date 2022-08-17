const postService = require('../services/post')

const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getUserPosts(req.user.userId)
        res.json(posts)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const getPost = async (req, res) => {
    try {
        const post = await postService.getPost(req.params.id)
        res.json(post)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const updatePost = async (req, res) => {
    try {
        const result = await postService.updatePost(req.params.id, req.user.userId, req.body.content)

        res.status(result.status).json(result.message)

    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const deletePost = async (req, res) => {
    try {
        const result = await postService.deletePost(req.params.id, req.user.userId)

        res.status(result.status).json(result.message)

    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const createPost = async (req, res) => {
    try {
        const { content } = req.body

        const comment = await postService.createPost(
            req.user.userId,
            content)

        res.status(201).json({ post })

    } catch
        (e) {
        res.status(500).json({ message: e.message })
    }
}


module.exports = {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
}