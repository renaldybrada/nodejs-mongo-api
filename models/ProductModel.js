import mongoose from "mongoose";

/**
 * Defining Product Schema
 */

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
},{
  timestamps: true
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
