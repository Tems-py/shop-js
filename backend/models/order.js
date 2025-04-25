const db = require("../utils/database");

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

    static fetchAll() {
        return db.execute("SELECT * FROM orders");
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            const products = [];
            db.execute("SELECT * FROM oders").then(([rows, fieldData]) => {
                rows.forEach((row) => {
                    products.push(
                        new Order(row["address"], JSON.parse(row["products"]))
                    );
                });
                resolve(products);
            });
        });
    }
};
