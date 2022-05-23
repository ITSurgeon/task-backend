const {Router} = require('express')

const User = require("../models/User");

const router = Router()

router.post('/', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/', async (req, res) => {
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

module.exports = router