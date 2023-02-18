const bcrypt = require('bcrypt');
const passport = require('passport');
const renderTemplate = require('../lib/renderTemplate');
const RegisterPage = require('../views/RegisterPage');
const LoginPage = require('../views/LoginPage');

const { User } = require('../../db/models');

const renderLogin = async (req, res) => {
  try {
    renderTemplate(LoginPage, {}, res);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).json({ err });
    if (!user) return res.status(401).json({ message: info.message });
    req.session.user = user;
    return res.status(200).json({ user: req.session.user, message: 'OK' });
  })(req, res, next);
};

const renderRegister = async (req, res) => {
  try {
    renderTemplate(RegisterPage, {}, res);
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const {
      email, password, group, graduationYear, firstName, lastName,
    } = req.body;
    if (email && password && group && graduationYear && firstName && lastName) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const newUser = await User.create({
        email,
        password: hashPassword,
        group,
        graduationYear,
        firstName,
        lastName,
      });
      res.redirect(307, '/auth/login');
    } else throw new Error('All fields are required');
  } catch (error) {
    if (error.errors) { res.status(400).json({ message: error.errors[0].message }); } else res.status(400).json({ message: error.message });
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.send(200);
};

module.exports = {
  renderRegister, renderLogin, login, register, logout,
};
