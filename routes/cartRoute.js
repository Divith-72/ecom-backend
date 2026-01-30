const express = require('express');
const router = express.Router();
const { getCartItems, addToCart, removeFromCart } = require('../controller/cartController');

router.get('/', getCartItems);
router.post('/', addToCart);
router.delete('/:id', removeFromCart);

module.exports = router;
