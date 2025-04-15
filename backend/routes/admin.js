const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/add-product", adminController.postAddProduct);

// router.get("/cart", shopController.getCart);
// router.post("/cart", shopController.postCart);

// router.post("/cart-delete-item", shopController.postCartDeleteProduct);
// router.get("/orders", shopController.getOrders);
// router.get("/checkout", shopController.getCheckout);

module.exports = router;
