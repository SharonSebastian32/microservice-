const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const captainRouter = require("./router/captain.routes");
const rabbitMQ = require("../captain/service/rabbit");
const app = express();
rabbitMQ.connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/", captainRouter);

module.exports = app;
