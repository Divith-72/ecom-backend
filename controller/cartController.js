const CartItem = require('../model/CartItem');

// Get all cart items
const getCartItems = async (req, res) => {
  try {
    const items = await CartItem.find().populate('food');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add item to cart
const addToCart = async (req, res) => {
  const { foodId, quantity } = req.body;
  const cartItem = new CartItem({ food: foodId, quantity });

  try {
    const newItem = await cartItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete cart item
const removeFromCart = async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCartItems,
  addToCart,
  removeFromCart,
};
