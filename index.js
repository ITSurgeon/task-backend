const express = require('express')
const mongoose = require('mongoose')
const path = require('path');

require('dotenv').config()
const PORT = process.env.PORT || 3000,
    MONGO_URI = process.env.MONGO_URI

const app = express()

app.use(express.json())
app.use('/api/auth', require('./src/routes/auth'))
app.use('/api/users', require('./src/routes/users'))
app.use('/api/posts', require('./src/routes/posts'))
app.use('/api/comments', require('./src/routes/comments'))

async function start() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('db connected')
        app.use(express.static('documentation'));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'documentation', 'index.html'));
        });
        app.listen(PORT, () => {
                console.log(`server started on port ${ PORT }`)
            }
        )
    } catch (e) {
        console.log('error: ', e.message)
        process.exit(1)
    }
}

start()

