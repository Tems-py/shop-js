import axios from "axios";
import Product from "../product/Product";
import { useState } from "react";

const Cart = (props) => {
    const { cartHook, addressHook } = props;
    const [cart, setCart] = cartHook;
    const [address, setAddress] = addressHook;

    const [deliveryType, setDeliveryType] = useState(0);

    const deliveryMethods = [
        {
            name: "Kurier DHL",
            cost: 9.99,
        },
        {
            name: "Kurier InPost",
            cost: 6.99,
        },
        {
            name: "Poczta Polska Mini-Paczka",
            cost: 7.99,
        },
    ];

    let sum = 0;
    cart.forEach((element) => {
        sum += element.product.price * element.quantity;
    });
    if (deliveryType) sum += deliveryType.cost;

    const updateQuantity = (index, q) => {
        setCart((c) => {
            let cart = c.slice();
            cart[index].quantity += q;
            if (cart[index].quantity <= 0) cart.pop(index);
            return cart;
        });
        console.log(cart);
    };

    const createOrder = () => {
        console.log(deliveryType);
        axios.post("http://localhost:3001/new_order", {
            cart: cart.map((p) => ({ id: p.product.id, quantity: p.quantity })),
            address:
                address.city +
                " " +
                address.postCode +
                " " +
                address.street +
                " " +
                address.building,
            telephone: address.telephone,
            email: address.email,
            price: sum,
            deliveryType: deliveryType.name,
        });
    };

    return (
        <div className="flex flex-col gap-3 w-fit">
            {cart.length === 0 && (
                <div className="text-xl p-3 rounded-md border border-red-500 ">
                    Brak produktów w koszyku
                </div>
            )}
            {cart.length !== 0 && (
                <div className="flex flex-col gap-3 w-fit">
                    <h1 className="text-2xl font-bold text-center">Koszyk</h1>
                    {cart.map((product, i) => (
                        <div
                            className="border border-indigo-500 p-3 rounded-md flex flex-row justify-between items-center gap-3"
                            key={i}
                        >
                            <div className="flex flex-row gap-3 items-center">
                                <img
                                    src={product.product.imageUrl}
                                    alt=""
                                    className="h-32 w-32 rounded"
                                />
                                <div>{product.product.name}</div>
                                <div>{product.product.price}zł</div>
                            </div>
                            <div>x</div>
                            <div className="flex flex-col gap-3 items-center justify-center">
                                <button onClick={() => updateQuantity(i, 1)}>
                                    ⬆
                                </button>
                                <div>{product.quantity}</div>
                                <button onClick={() => updateQuantity(i, -1)}>
                                    ⬇
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col gap-3">
                        <h3 className="p-3 border-indigo-500 border-b-4 w-fit font-bold text-xl">
                            Adres dostawy
                        </h3>
                        <div className="grid gap-3 grid-cols-5">
                            <div className="col-span-4">
                                <div>Miasto</div>
                                <input
                                    type="text"
                                    placeholder="Miasto"
                                    value={address.city}
                                    onChange={(e) => {
                                        setAddress((address) => {
                                            const address2 = { ...address };
                                            address2.city = e.target.value;
                                            return address2;
                                        });
                                    }}
                                    className="p-2 border-indigo-300 bg-indigo-200 rounded-md border w-full"
                                />
                            </div>
                            <div>
                                <div>Kod pocztowy</div>
                                <input
                                    type="text"
                                    placeholder="Kod pocztowy"
                                    value={address.postCode}
                                    onChange={(e) => {
                                        setAddress((address) => {
                                            const address2 = { ...address };
                                            address2.postCode = e.target.value;
                                            return address2;
                                        });
                                    }}
                                    className="p-2 border-indigo-300 bg-indigo-200 rounded-md border w-full"
                                />
                            </div>
                            <div className="col-span-3">
                                <div>Ulica</div>
                                <input
                                    type="text"
                                    placeholder="Ulica"
                                    value={address.address}
                                    onChange={(e) => {
                                        setAddress((address) => {
                                            const address2 = { ...address };
                                            address2.address = e.target.value;
                                            return address2;
                                        });
                                    }}
                                    className="p-2 border-indigo-300 bg-indigo-200 rounded-md border w-full"
                                />
                            </div>
                            <div className="col-span-2">
                                <div>Nr. budynku (i mieszkania)</div>
                                <input
                                    type="text"
                                    value={address.building}
                                    placeholder="Nr. budynku"
                                    onChange={(e) => {
                                        setAddress((address) => {
                                            const address2 = { ...address };
                                            address2.building = e.target.value;
                                            return address2;
                                        });
                                    }}
                                    className="p-2 border-indigo-300 bg-indigo-200 rounded-md border w-full"
                                />
                            </div>
                            <div className="col-span-2">
                                <div>Nr. telefonu</div>
                                <input
                                    type="text"
                                    value={address.telephone}
                                    placeholder="nr. telefonu"
                                    onChange={(e) => {
                                        setAddress((address) => {
                                            const address2 = { ...address };
                                            address2.telephone = e.target.value;
                                            return address2;
                                        });
                                    }}
                                    className="p-2 border-indigo-300 bg-indigo-200 rounded-md border w-full"
                                />
                            </div>
                            <div className="col-span-2">
                                <div>Adres email</div>
                                <input
                                    type="text"
                                    value={address.email}
                                    placeholder="Adres email"
                                    onChange={(e) => {
                                        setAddress((address) => {
                                            const address2 = { ...address };
                                            address2.email = e.target.value;
                                            return address2;
                                        });
                                    }}
                                    className="p-2 border-indigo-300 bg-indigo-200 rounded-md border w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <h3 className="p-3 border-indigo-500 border-b-4 w-fit font-bold text-xl">
                        Sposób dostawy
                    </h3>
                    <div>
                        <select
                            value={deliveryType}
                            className="p-2 border-indigo-300 bg-indigo-200 rounded-md border"
                            onChange={(e) =>
                                setDeliveryType(deliveryMethods[e.target.value])
                            }
                        >
                            {deliveryMethods.map((method, i) => (
                                <option value={i}>
                                    {method.name} - {method.cost}zł
                                </option>
                            ))}
                        </select>
                    </div>
                    <h3 className="p-3 border-indigo-500 border-b-4 w-fit font-bold text-xl">
                        Podsumowanie
                    </h3>
                    <div className="flex flex-row justify-between p-3 border-indigo-300 bg-indigo-200 font-xl border rounded-md">
                        <div>Suma zamowówienia:</div>
                        <div className="font-bold">{sum} zł</div>
                    </div>
                    <button
                        onClick={createOrder}
                        className="p-3 rounded-md border-indigo-400 border font-xl bg-indigo-300"
                    >
                        Złóż zamówienie
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
