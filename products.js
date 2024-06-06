const express = require("express");
const router = express.Router();
const { fetchProducts, createProduct } = require("./db/products");

//get all products
router.get("/", async (req, res, next) => {
  try {
    res.send(await fetchProducts());
  } catch (err) {
    next(err);
  }
});

//create a product
router.post("/", async (req, res, next) => {
  try {
    res.send(await createProduct(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
