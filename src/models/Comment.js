const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  postId: { type: Types.ObjectId, required: true, ref: 'Post' },
  content: { type: String, required: true }
});

module.exports = model('Comment', schema);
