const {Router} = require('express')

const User = require("../models/User")
const Post = require("../models/Post")
const Comment = require("../models/Comment")

const auth = require("../middlewares/auth.middleware")
const {model} = require("mongoose");

const router = Router()

router.get('/', auth, async (req, res) => {
    try {
        let response = []
        const users = await User.find()
        users.forEach(user => {
            response.push({login: user.login, userId: user.id})
        })
        res.json(response)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        const friends = []

        const user = await User.findById(id).populate('friends')
        user.friends.forEach(user => {
            friends.push({login: user.login, userId: user.id})
        })

        const response = {login: user.login, userId: user.id, friends}
        res.json(response)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/own/profile', auth, async (req, res) => {
    try {
        const id = req.user.userId
        const user = await User.findById(id).populate('friends').populate('invitationsTo').populate('invitationsFrom')

        const friends = []
        user.friends.forEach(user => {
            friends.push({login: user.login, userId: user.id})
        })

        const invitationsFrom = []
        user.invitationsFrom.forEach(user => {
            invitationsFrom.push({login: user.login, userId: user.id})
        })

        const invitationsTo = []
        user.invitationsTo.forEach(user => {
            invitationsTo.push({login: user.login, userId: user.id})
        })

        const posts = await Post.find({userId: id})
        const comments = await Comment.find({userId: id})

        const response = {login: user.login, userId: user.id, friends, invitationsTo, invitationsFrom, posts, comments}

        res.json((response))

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.put('/:id/invite', auth, async (req, res) => {
    if (req.params.id !== req.user.userId) {
        try {
            const userInvited = await User.findById(req.params.id),
                userInviting = await User.findById(req.user.userId)

            if (!userInviting.friends.includes(req.params.id)) {
                if (!userInviting.invitationsTo.includes(req.params.id)) {

                    await userInvited.updateOne({$push: {invitationsFrom: req.user.userId}})
                    await userInviting.updateOne({$push: {invitationsTo: req.params.id}})

                    res.status(201).json({message: `User ${userInvited.login} successfully invited`})

                } else {
                    res.status(403).json({message: `You have already invited user ${userInvited.login}`})
                }

            } else {
                res.status(403).json({message: `User ${userInvited.login} is already in your friends list`})
            }

        } catch (e) {
            res.status(500).json({message: e.message})
        }

    } else {
        res.status(403).json({message: "You can't invite yourself"})
    }
})

router.put('/:id/approve', auth, async (req, res) => {
    try {
        const userInviting = await User.findById(req.params.id),
            userApproving = await User.findById(req.user.userId)

        if (!userApproving.friends.includes(userInviting.id)) {

            await userApproving.updateOne({$push: {friends: userInviting.id}}).updateOne({$pull: {invitationsFrom: userInviting.id}})

            await userInviting.updateOne({$push: {friends: userApproving.id}}).updateOne({$pull: {invitationsTo: userApproving.id}})

            res.status(201).json({message: `User ${userInviting.login} successfully added to friends`})

        } else {
            res.status(403).json({message: `User ${userInviting.login} is allready in your friends list`})
        }

    } catch (e) {
        res.status(500).json({message: e.message})
    }

})

router.get('/:id/posts', auth, async (req, res) => {
    try {
        const posts = await Post.find({userId: req.params.id})
        res.json(posts)
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

module.exports = router