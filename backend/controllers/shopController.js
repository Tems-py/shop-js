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
    let email = req.body.email;
    let telephone = req.body.telephone;
    let price = req.body.price;
    let deliveryType = req.body.deliveryType;
    const order = new Order(
        0,
        cart,
        address,
        email,
        telephone,
        price,
        deliveryType
    );
    order.addNew();
};
