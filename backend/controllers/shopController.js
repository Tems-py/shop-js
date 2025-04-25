const Order = require("../models/order");
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
    Product.getAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then((product) => {
            return res.json(product);
        })
        .catch((err) => console.log(err));
};

exports.postNewOrder = (req, res, next) => {
    let address = req.body.address;
    let cart = req.body.cart;
    const order = new Order(cart, address);
    order.addNew();
};
