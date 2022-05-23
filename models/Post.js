const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    author: {type: Types.ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now},
    comments: [{type: Types.ObjectId, ref: 'Comment'}],
    content: {type: String, required: true}
})

module.exports = model('Post', schema)
