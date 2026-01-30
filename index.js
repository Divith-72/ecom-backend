// FoodLoop – A Full-Stack MERN Online Food Ordering System (Backend)

const express = require("express");
const CartRoute = require("./routes/cartRoute");
const FoodRoute = require("./routes/foodRoute");
const dotenv = require("dotenv");
const connectdb = require("./config/db");

dotenv.config();
connectdb();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", CartRoute);
app.use("/api", FoodRoute);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🍔 FoodLoop Backend Server is running on port ${PORT}`);
});
