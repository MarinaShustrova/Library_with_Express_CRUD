const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const AddBook = require('../views/AddBook');

const { Book } = require('../../db/models');

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

module.exports = { renderAddBook, addBook };
