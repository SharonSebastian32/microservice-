const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const rideRouter = require("../ride/router/ride.router");
const app = express();
const rabbitMQ = require("../ride/service/rabbit");
rabbitMQ.connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/", rideRouter);

module.exports = app;
