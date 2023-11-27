const express = require("express");
const {
  getProducts,
  createNewProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const productRoute = express.Router();

productRoute.get("/", getProducts);

productRoute.post("/", createNewProduct);

productRoute.get("/:productId", getProduct);

productRoute.put("/:productId", updateProduct);

productRoute.delete("/:productId", deleteProduct);

module.exports = productRoute;
