const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  invitationsTo: [{ type: Types.ObjectId, ref: 'User' }],
  invitationsFrom: [{ type: Types.ObjectId, ref: 'User' }],
  friends: [{ type: Types.ObjectId, ref: 'User' }]
});

module.exports = model('User', schema);
