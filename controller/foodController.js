const FoodItem = require('../model/FoodItem');

// Get all food items
const getAllFood = async (req, res) => {
  try {
    const foods = await FoodItem.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new food item
const createFood = async (req, res) => {
  const { name, description, price, imageUrl, category } = req.body;
  const food = new FoodItem({ name, description, price, imageUrl, category });

  try {
    const newFood = await food.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllFood,
  createFood,
};
