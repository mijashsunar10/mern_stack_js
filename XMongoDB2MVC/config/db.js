

const mongoose = require('mongoose');//moongos import
const dotenv = require('dotenv');//import dotenv
dotenv.config();//config dotenv load

const MONGODB_URI = process.env.MONGODB_URI;//get the uri from env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;