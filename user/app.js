const express = require("express");
const userRoutes = require("./router/user.routes");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/", userRoutes);

module.exports = app;
