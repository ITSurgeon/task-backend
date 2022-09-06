const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET || 'testsecret';

const {
  getUserByLogin,
  createUser
} = require('../services/user');

const register = async (req, res) => {
  try {
    const { login, password } = req.body;

    const exists = await getUserByLogin(login);
    if (exists) {
      return res.status(400).json(
        { message: `User ${login} is already registered` }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await createUser(login, hashedPassword);

    res.status(201).json(
      { message: `User ${user.login} successfully registered, please log in` }
    );

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const login = async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await getUserByLogin(login);
    if (!user) {
      return res.status(400).json({ message: `User ${login} not found` });
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(400).json({ message: 'Wrong password' });
    }

    const token = jwt.sign(
      { userId: user.id },
      JWT_SECRET,
      { expiresIn: '12h' }
    );

    res.json({
      'message': `User ${login} successfully authorized`,
      userId: user.id,
      login: user.login,
      token
    });

  } catch (e) {
    res.status(500).json({ message: e.message });
  }

};

module.exports = {
  register,
  login
};
