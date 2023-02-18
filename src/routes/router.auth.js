const express = require('express');
const {
  renderRegister,
  register,
  renderLogin,
  login,
  logout,
} = require('../controllers/controller.auth');

const router = express.Router();

router
  .get('/login', renderLogin)
  .post('/login', login)
  .get('/register', renderRegister)
  .post('/register', register)
  .get('/logout', logout);

module.exports = router;
