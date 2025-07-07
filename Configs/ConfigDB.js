const mongoose = require("mongoose");
require("dotenv").config();



const connectMongoDB = () => {
  try {
   MONGODB_URI=process.env.MONGODB_URI;

    mongoose.connect(MONGODB_URI);
    console.log("Successfully Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectMongoDB;
