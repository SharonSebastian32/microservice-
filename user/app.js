const express = require("express");
const userRoutes = require("./router/user.routes");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const rabbitMQ = require("../user/service/rabbit");

rabbitMQ.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/", userRoutes);

module.exports = app;
