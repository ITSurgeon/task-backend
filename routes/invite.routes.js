const {Router} = require('express')

const User = require("../models/User")
const auth = require("../middleware/auth.middleware")
const Invite = require("../models/Invite")

const router = Router()

router.post('/create/:id', auth, async (req, res) => {
    try {
        if (!req.user.friends.includes(req.params.id)) {
            const invite = new Invite({from: req.user.userId, to: req.params.id})
            await invite.save()
            res.status(201).json(invite)
        }
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/to/', auth, async (req, res) => {
    try {
        const invites = await Invite.find({to: req.user.id})
        res.json(invites)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/to/:id', auth, async (req, res) => {
    try {
        const invites = await Invite.findById(req.params.id)
        res.json(invites)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


router.get('/from/', auth, async (req, res) => {
    try {
        const invites = await Invite.find({from: req.user.id})
        res.json(invites)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


router.get('/:id', auth, async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: e.message})
    }

})

router.post('/from/:id/approve', auth, async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


module.exports = router