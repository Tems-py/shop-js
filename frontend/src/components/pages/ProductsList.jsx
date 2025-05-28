import { useState } from "react";
import Product from "../product/Product";

const ProductList = (props) => {
    const { products, cartHook, addNotification, adminView, knownAttributes } =
        props;
    console.log(knownAttributes);
    const [cart, setCart] = cartHook;
    const [priceStart, setPriceStart] = useState("");
    const [priceEnd, setPriceEnd] = useState("");
    const [selectedAttributes, setSelectedAttributes] = useState({});

    const addToCart = (product) => {
        const foundProducts = cart.filter((p) => p.product == product);
        if (foundProducts.length == 0) {
            cart.push({
                product: product,
                quantity: 1,
            });
        } else {
            foundProducts[0].quantity += 1;
        }

        addNotification(
            "🛒🛒🛒",
            `Dodałeś ${product.name} do koszyka`,
            3000,
            "bg-green-200"
        );
        setCart(cart.slice());
    };

    return (
        <div className="flex flex-col gap-3 items-center">
            <div className="grid grid-cols-2 gap-3 items-center">
                <label className="flex flex-row gap-3 items-center">
                    Cena od
                </label>
                <input
                    type="text"
                    className="p-2 border-indigo-300 bg-indigo-200 rounded-md border"
                    value={priceStart}
                    onChange={(e) => setPriceStart(e.target.value)}
                />
                <label className="flex flex-row gap-3 items-center">
                    Cena do
                </label>
                <input
                    type="text"
                    className="p-2 border-indigo-300 bg-indigo-200 rounded-md border"
                    value={priceEnd}
                    onChange={(e) => setPriceEnd(e.target.value)}
                />

                {Object.keys(knownAttributes).map((a) => (
                    <>
                        <label className="flex flex-row gap-3 items-center">
                            {a}
                        </label>
                        <select
                            className="p-2 border-indigo-300 bg-indigo-200 rounded-md border"
                            onChange={(e) => {
                                setSelectedAttributes((selectedAttributes) => {
                                    const s = { ...selectedAttributes };
                                    s[a] = e.target.value;
                                    console.log(s);
                                    return s;
                                });
                            }}
                        >
                            {knownAttributes[a].map((attribute) => (
                                <option value={attribute}>{attribute}</option>
                            ))}
                        </select>
                    </>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-3 w-fit">
                {products
                    .filter(
                        (product) =>
                            (priceEnd == "" ||
                                product.price <= Number(priceEnd)) &&
                            (priceStart == "" ||
                                product.price >= Number(priceStart))
                    )
                    .filter((product) => {
                        let output = true;
                        Object.keys(selectedAttributes).forEach((name) => {
                            if (selectedAttributes[name] == "") return;
                            const prop = product.properties.find(
                                (p) => p.text == name
                            );
                            console.log(prop, selectedAttributes[name]);
                            if (!prop) {
                                output = false;
                                return;
                            }
                            if (prop.value != selectedAttributes[name])
                                output = false;
                        });
                        return output;
                    })
                    .map((product) => (
                        <Product
                            product={product}
                            addToCart={addToCart}
                            key={product.id}
                            adminView={adminView}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ProductList;
