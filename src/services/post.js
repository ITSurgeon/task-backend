const Post = require("../models/Post");

const getUserPosts = async function (userId) {
    try {
        return await Post.find({ userId })
    } catch (e) {
        throw Error('Connection to DB failed')
    }
}

const getPost = async function (postId) {
    try {
        return await Post.findById({ postId })
    } catch (e) {
        throw Error('Connection to DB failed')
    }
}

const updatePost = async function (postId, userId, content) {
    try {
        const post = await Post.findById(postId)

        if (post.userId === userId) {
            post.content = content
            await post.save()
            return ({ status: 201, message: "Post successfully updated" })
        }
        return ({ status: 403, message: "It's not your Post!" })

    } catch (e) {
        return ({ status: 500, message: e.message })
    }
}

const deletePost = async function (postId, userId) {
    try {
        const post = await Post.findById(commentId)

        if (post.userId === userId) {
            await Post.findByIdAndDelete(postId)
            return ({ status: 200, message: "Post successfully deleted" })
        }
        return ({ status: 403, message: "It's not your post!" })

    } catch (e) {
        return ({ status: 500, message: e.message })
    }
}

const createPost = async function (userId, content) {
    const post = new Post({ userId, content })
    await post.save()
    return post
}


module.exports = {
    getUserPosts,
    getPost,
    updatePost,
    deletePost,
    createPost
}