const db = require("../utils/database");

module.exports = class Product {
    constructor(id, name, imageUrl, description, price, properties) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.properties = properties;
    }

    addNew() {
        return db.execute(
            "INSERT INTO products (name, price, image, description, properties) VALUES (?, ?, ?, ?, ?)",
            [
                this.name,
                this.price,
                this.imageUrl,
                this.description,
                JSON.stringify(this.properties),
            ]
        );
    }

    updateProduct() {
        console.log(this);
        return db.execute(
            "UPDATE products SET `name` = ?, `price` = ?, `image` = ?, `description` = ?, `properties` = ? where `id` = ?",
            [
                this.name,
                this.price,
                this.imageUrl,
                this.description,
                JSON.stringify(this.properties),
                this.id,
            ]
        );
    }

    static fetchAll() {
        return db.execute("SELECT * FROM products");
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            const products = [];
            db.execute("SELECT * FROM products").then(([rows, fieldData]) => {
                rows.forEach((row) => {
                    products.push(
                        new Product(
                            row["id"],
                            row["name"],
                            row["image"],
                            row["description"],
                            parseFloat(row["price"]),
                            JSON.parse(row["properties"])
                        )
                    );
                });
                resolve(products);
            });
        });
    }

    static findById(id) {
        return new Promise((resolve, reject) => {
            db.execute("SELECT * from products where products.id = ?", [
                id,
            ]).then(([rows, fieldData]) => {
                if (rows.length == 0) return resolve({});
                resolve(
                    new Product(
                        rows[0]["id"],
                        rows[0]["name"],
                        rows[0]["image"],
                        rows[0]["description"],
                        Number(rows[0]["price"]),
                        JSON.parse(rows[0]["properties"])
                    )
                );
            });
        });
    }
};
