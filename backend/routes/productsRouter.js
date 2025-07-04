const express = require('express');
const { insertProducts, getProductsOnQuery } = require('../controllers/productHandler');
const productRouter = express.Router();
productRouter.get("/", insertProducts)
productRouter.get("/:currentPage/:perPage/:searchValue", getProductsOnQuery);


module.exports = productRouter;