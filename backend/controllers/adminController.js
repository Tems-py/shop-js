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

exports.postEditProduct = (req, res, netx) => {
    Product.findById(req.body.id).then((product) => {
        product.name = req.body.name;
        product.imageUrl = req.body.imageUrl;
        product.description = req.body.description;
        product.price = req.body.price;
        product.properties = req.body.properties;
        product.updateProduct();
    });
};
