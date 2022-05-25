const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    posts: [{type: Types.ObjectId, ref: 'Post'}],
    comments: [{type: Types.ObjectId, ref: 'Comment'}],
    invitationsTo: [{type: Types.ObjectId, ref: 'User'}],
    invitationsFrom: [{type: Types.ObjectId, ref: 'User'}],
    friends: [{type: Types.ObjectId, ref: 'User'}]
})

module.exports = model('User', schema)