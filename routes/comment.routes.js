const {Router} = require('express')

const Comment = require('../models/Comment')

const router = Router()

router.post('/write', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/:userId', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: e.message})
    }

})

router.get('/:commentId', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: e.message})
    }

})

router.get('/:postId', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: e.message})
    }

})

router.get('/:authorId', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: e.message})
    }

})

module.exports = router