const Product = require("../models/product.model");

exports.createNewProduct = async (req, res) => {
  try {
    let product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const result = await Product.find({});
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const result = await Product.findById(req.params.productId);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const result = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.productId);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
