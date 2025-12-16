const express = require("express");

const{getUser,postUser,deleteUser,updateUser} = require("../controller/UserController");
const router = express.Router();
router.get("/getUser", getUser);
router.post("/postUser",postUser)
router.delete("/deleteUser/:id",deleteUser)
router.put("/updateUser/:id",updateUser)
module.exports = router;