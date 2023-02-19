const express = require('express');


// router.get('/add', renderAddBook).post('/add', addBook);

const {
  renderBooksList,
  renderAddBook,
  addBook,
  likeBook,
  unlikeBook,
  renderMyBooks,
  renderEditBook,
  editBook,
  deleteBook,
} = require('../controllers/controller.books');

const router = express.Router();
router
  .get('/', renderBooksList)
  .get('/add', renderAddBook)
  .post('/add', addBook)
  .post('/like', likeBook)
  .post('/unlike', unlikeBook)
  .get('/my', renderMyBooks)
  .get('/edit/:id', renderEditBook)
  .post('/edit/:id', editBook)
  .post('/delete/;id', deleteBook);

module.exports = router;
