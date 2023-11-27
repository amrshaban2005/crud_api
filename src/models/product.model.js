const mongoose = require("mongoose");

const schema = mongoose.Schema;

const ProductSchema = new schema({
  productId: { type: String, required: true },
  prodcutName: { type: String, required: true },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
