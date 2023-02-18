
const express = require('express');
const { renderAddBook, addBook } = require('../controllers/controller.books');

const router = express.Router();

router.get('/add', renderAddBook).post('/add', addBook);

module.exports = router;
