const {Router} = require('express')

const User = require("../models/User")
const auth = require("../middleware/auth.middleware")
const {stringify} = require("nodemon/lib/utils");
const {model} = require("mongoose");

const router = Router()

router.get('/', auth, async (req, res) => {
    try {
        const users = await User.find()
        users.forEach(user => {
            console.log(user.id)
        })
        res.json(users)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/:id', auth, async (req, res) => {
        try {
            const id = req.params.id
            const posts = await User.findById(id).populate('posts.post', model('Post'))
            const user = {posts, id}
            res.json(stringify(user))
        } catch (e) {
            res.status(500).json({message: e.message})
        }
})


router.put('/:id/invite/', auth, async (req, res) => {
    if (req.params.id !== req.user.userId) {
        try {
            const userInvited = await User.findById(req.params.id),
                userInviting = await User.findById(req.user.userId)

            if (!userInviting.friends.includes(req.params.id)) {
                await userInvited.updateOne({$push: {invitationsFrom: req.user.userId}})
                await userInviting.updateOne({$push: {invitationsTo: req.params.id}})
                res.status(201).json({message: `User ${userInvited} successfully invited`})

            } else {
                res.status(403).json({message: 'User is allready in your friends list'})
            }

        } catch (e) {
            res.status(500).json({message: e.message})
        }

    } else {
        res.status(403).json({message: "You can't invite yourself"})
    }
})

router.get('/invitations/', auth, async (req, res) => {
        try {
            const {invitationsFrom} = await User.findById(req.user.userId)
            res.json(invitationsFrom)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
})

module.exports = router