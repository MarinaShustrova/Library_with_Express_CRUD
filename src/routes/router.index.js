const express = require('express');
const { index } = require('../controllers/controller.index');

const router = express.Router();

router.get('/', index);

module.exports = router;
