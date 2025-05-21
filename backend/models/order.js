const db = require("../utils/database");
const Product = require("./product");

module.exports = class Order {
    constructor(id, products, address, email, telephone, price, deliveryType) {
        this.id = id;
        this.products = products;
        this.address = address;
        this.email = email;
        this.telephone = telephone;
        this.price = price;
        this.deliveryType = deliveryType;
    }

    addNew() {
        console.log(this);
        return db.execute(
            "INSERT INTO orders (products, address, email, telephone, price, deliveryType) VALUES (?, ?, ?, ?, ?, ?)",
            [
                JSON.stringify(this.products),
                this.address,
                this.email,
                this.telephone,
                this.price,
                this.deliveryType,
            ]
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
                            if (product == null) resolve(null);
                            resolve({
                                product: product,
                                quantity: orderProduct.quantity,
                            });
                        })
                    )
                );
            });
            promises.push(
                new Promise((resolve, reject) => {
                    const order = { ...this };
                    order.products = undefined;
                    resolve(order);
                })
            );
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
                        new Order(
                            row["id"],
                            JSON.parse(row["products"]),
                            row["address"],
                            row["email"],
                            row["telephone"],
                            row["price"],
                            row["deliveryType"]
                        )
                    );
                });
                console.log(orders);
                resolve(orders);
            });
        });
    }
};
