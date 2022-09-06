const { Router } = require('express');

const auth = require('../middlewares/auth.middleware');

const router = Router();

const {
  getAllUsers,
  getUser,
  getOwnProfile,
  inviteUser,
  approveUser,
  getUserPosts,
  getUserComments
} = require('../controllers/users');

router.get('/', auth, getAllUsers);

router.get('/:id', auth, getUser);

router.get('/own/profile', auth, getOwnProfile);

router.put('/:id/invite', auth, inviteUser);

router.put('/:id/approve', auth, approveUser);

router.get('/:id/posts', auth, getUserPosts);

router.get('/:id/comments', auth, getUserComments);

module.exports = router;
