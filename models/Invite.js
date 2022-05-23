const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    from: {type: Types.ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now},
    to: {type: Types.ObjectId, ref: 'User'},
})

module.exports = model('Invite', schema)