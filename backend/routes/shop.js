const express = require("express");

const shopController = require("../controllers/shopController");

const router = express.Router();

router.get("/products", shopController.getProducts);
router.post("/new_order", shopController.postNewOrder);
router.get("/product/:productId", shopController.getProduct);

// router.get("/cart", shopController.getCart);
// router.post("/cart", shopController.postCart);

// router.post("/cart-delete-item", shopController.postCartDeleteProduct);
// router.get("/orders", shopController.getOrders);
// router.get("/checkout", shopController.getCheckout);

module.exports = router;
