const Comment = require('../models/Comment');

const getUserComments = async function(userId) {
  try {
    return await Comment.find({ userId });
  } catch (e) {
    throw Error('Connection to DB failed');
  }
};

const getPostComments = async function(userId) {
  try {
    return await Comment.find({ userId });
  } catch (e) {
    throw Error('Connection to DB failed');
  }
};

const getComment = async function(id) {
  try {
    return await Comment.findById(id);
  } catch (e) {
    throw Error('Connection to DB failed');
  }
};

const updateComment = async function(commentId, userId, content) {
  try {
    const comment = await Comment.findById(commentId);

    if (comment.userId === userId) {
      comment.content = content;
      await comment.save();
      return ({ status: 201, message: 'Comments successfully updated' });
    }
    return ({ status: 403, message: 'It\'s not your comment!' });

  } catch (e) {
    return ({ status: 500, message: e.message });
  }
};

const deleteComment = async function(commentId, userId) {
  try {
    const comment = await Comment.findById(commentId);

    if (comment.userId === userId) {
      await Comment.findByIdAndDelete(commentId);
      return ({ status: 200, message: 'Comment successfully deleted' });
    }
    return ({ status: 403, message: 'It\'s not your comment!' });

  } catch (e) {
    return ({ status: 500, message: e.message });
  }
};

const createPostComment = async function(userId, postId, content) {
  const comment = new Comment({ userId, content, postId });
  await comment.save();
  return comment;
};

module.exports = {
  getUserComments,
  getPostComments,
  getComment,
  updateComment,
  deleteComment,
  createPostComment
};
