const jwt = require('jsonwebtoken');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET || 'testsecret';

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'User unauthorized' });
    }

    req.user = jwt.verify(token, JWT_SECRET);
    next();

  } catch (e) {
    return res.status(401).json({ message: 'User unauthorized' });
  }
};
