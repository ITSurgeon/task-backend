const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    userId: { type: Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    content: { type: String, required: true }
})

module.exports = model('Post', schema)
