const {Router} = require('express')

const User = require("../models/User");

const router = Router()

router.post('/create', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.post('/approve', async (req, res) => {
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
router.get('/:id', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: e.message})
    }

})

module.exports = router