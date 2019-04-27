import mongoose from "mongoose";

module.exports = () => {
  /**
   * Connectiong to DB
   */

  const MONGO_URI = "mongodb://localhost:27017/node-mongo";

  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
  }).then(() => {
    console.log("Successfully connected to DB!");
  }, err => {
    console.log("An error occurred while connecting to DB!");
    throw new Error(err);
  });
};
