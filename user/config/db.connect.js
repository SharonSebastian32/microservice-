const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  if (!process.env.MONGODB_URL) {
    console.error("MONGODB_URL is not defined in the environment variables");
    process.exit(1);
  }

  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("Connected to MongoDB successfully");
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connection established");
    });
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB connection disconnected");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;