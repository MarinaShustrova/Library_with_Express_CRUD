const express = require('express');


// router.get('/add', renderAddBook).post('/add', addBook);

const {
  renderBooksList,
  renderAddBook,
  addBook,
  likeBook,
  unlikeBook,
  renderMyBooks,
} = require('../controllers/controller.books');

const router = express.Router();
router
  .get('/', renderBooksList)
  .get('/add', renderAddBook)
  .post('/add', addBook)
  .post('/like', likeBook)
  .post('/unlike', unlikeBook)
  .get('/my', renderMyBooks);

module.exports = router;
