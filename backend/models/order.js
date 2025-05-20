const db = require("../utils/database");
const Product = require("./product");

module.exports = class Order {
    constructor(products, address) {
        this.products = products;
        this.address = address;
    }

    addNew() {
        console.log(this);
        return db.execute(
            "INSERT INTO orders (products, address, price) VALUES (?, ?, ?)",
            [JSON.stringify(this.products), this.address, 0.0]
        );
    }

    getWithProductData() {
        let products = this.products;
        const promises = [];
        return new Promise((resolve, reject) => {
            products.map((orderProduct) => {
                promises.push(
                    new Promise((resolve, reject) =>
                        Product.findById(orderProduct.id).then((product) => {
                            resolve({
                                product: product,
                                quantity: orderProduct.quantity,
                            });
                        })
                    )
                );
            });
            resolve(Promise.all(promises));
        });
    }

    static fetchAll() {
        return db.execute("SELECT * FROM orders");
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            const orders = [];
            db.execute("SELECT * FROM orders").then(([rows, fieldData]) => {
                rows.forEach((row) => {
                    orders.push(
                        new Order(JSON.parse(row["products"], row["address"]))
                    );
                });
                resolve(orders);
            });
        });
    }
};
