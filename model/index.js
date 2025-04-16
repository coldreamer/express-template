const mongoose = require("mongoose");
const userModel = require("./userModel");
const { config } = require("../config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.db.url);
  } catch (error) {
    console.log(error);
  }
};

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
    console.log(err);
  });

module.exports = {
  User: userModel,
};
