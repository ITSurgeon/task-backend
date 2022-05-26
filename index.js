const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT || 3000,
    MONGO_URI = process.env.MONGO_URI

const app = express()

app.use(express.json())
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/posts', require('./routes/posts.routes'))
app.use('/api/comments', require('./routes/comments.routes'))

async function start() {
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

