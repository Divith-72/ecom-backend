const express = require('express');
const router = express.Router();
const { getAllFood, createFood } = require('../controller/foodController');

router.get('/', getAllFood);
router.post('/', createFood);

module.exports = router;
