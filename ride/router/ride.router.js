const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const rideController = require("../controller/ride.controller");
const router = express.Router();
router.post("/create-ride", authMiddleware.userAuth, rideController.createRide);

module.exports = router;
