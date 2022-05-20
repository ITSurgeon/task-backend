const express = require('express')
const app = express()

const mongoose = require('mongoose')
const d = require('mongoose')

async function start(){
    try {
        await mongoose.connect('mongodb://localhost:27017/mytestdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('db connected')

        app.listen(3000, () => {
            console.log('server started on port 3000')
        }
)
    } catch (e) {
        console.log('error: ', e.message)
        process.exit(1)
    }
}

start()

