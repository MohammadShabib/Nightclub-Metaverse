const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/api/users", userController.getAllUsers);
router.post("/api/users/create", userController.createUser);
router.put("/api/user/:id", userController.updateUser);

module.exports = router;
