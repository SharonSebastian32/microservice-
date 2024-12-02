const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/profile", authMiddleware.userAuth, userController.profile);

module.exports = router;
