const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
    const product = new Product(
        -1,
        req.body.name,
        req.body.imageUrl,
        req.body.description,
        req.body.price,
        req.body.properties
    );
    product.addNew();
};
