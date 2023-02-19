const express = require('express');


// router.get('/add', renderAddBook).post('/add', addBook);

const {
  renderBooksList,
  renderAddBook,
  addBook,
  likeBook,
  unlikeBook,
} = require('../controllers/controller.books');

const router = express.Router();
router
  .get('/', renderBooksList)
  .get('/add', renderAddBook)
  .post('/add', addBook)
  .post('/like', likeBook)
  .post('/unlike', unlikeBook);

module.exports = router;
