const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT || 3000,
    MONGO_URI = process.env.MONGO_URI

const app = express()

async function start(){
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('db connected')

        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`)
        }
)
    } catch (e) {
        console.log('error: ', e.message)
        process.exit(1)
    }
}

start()

