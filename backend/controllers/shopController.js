const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
    Product.getAll()
        .then(([rows, fieldData]) => {
            return res.json(rows);
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
