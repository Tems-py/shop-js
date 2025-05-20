const Order = require("../models/Order");
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
    return res.json("Added");
};

exports.postEditProduct = (req, res, netx) => {
    Product.findById(req.body.id).then((product) => {
        product.name = req.body.name;
        product.imageUrl = req.body.imageUrl;
        product.description = req.body.description;
        product.price = req.body.price;
        product.properties = req.body.properties;
        product.updateProduct();
        return res.json("Updated");
    });
};

exports.getOrderList = (req, res, next) => {
    Order.getAll().then((orders) => {
        var promises = orders.map((order) => {
            return order.getWithProductData();
        });
        Promise.all(promises).then(function (results) {
            console.log(results);
            return res.json(results);
        });
    });
};

exports.postDeleteProduct = (req, res, next) => {
    Product.delete(req.body.id).then(() => {
        return res.json("Delted");
    });
};
