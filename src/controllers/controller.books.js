const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const AddBook = require('../views/AddBook');

const { Book, Like } = require('../../db/models');
const BooksList = require('../views/BooksList');

const renderBooksList = async (req, res) => {
  const { user } = req.session;
  const books = await Book.findAll({
    include: [Like],
  });
  renderTemplate(BooksList, { user, books }, res);
};

const renderAddBook = (req, res) => {
  const { user } = req.session;
  if (user)renderTemplate(AddBook, { user }, res);
  else renderTemplate(Main, { user }, res);
};

const addBook = async (req, res) => {
  const { title, description, cover } = req.body;
  try {
    if (title && description && cover) {
      const book = await Book.create({
        title,
        description,
        cover,
        userId: req.session.user.id,
      });
      res.sendStatus(200);
    } else throw new Error('all fields are required');
  } catch (error) {
    if (error.errors) { res.status(400).json({ message: error.errors[0].message }); } else res.status(400).json({ message: error.message });
  }
};
const likeBook = async (req, res) => {
  const { bookId } = req.body;
  await Like.create({ bookId, userId: req.session.user.id });
  res.sendStatus(200);
};

const unlikeBook = async (req, res) => {
  const { bookId } = req.body;
  const like = await Like.findOne({
    where: { bookId, userId: req.session.user.id },
  });
  like.destroy();
  res.sendStatus(200);
};

const renderMyBooks = async(req, res) => {
  const { user } = req.session;
  const books = await Book.findAll({
    where: { userId: user.id},
    include: [Like],
  });
  renderTemplate(BooksList, { user, books}, res);
};

module.exports = { renderBooksList, renderAddBook, addBook, likeBook, unlikeBook, renderMyBooks };
