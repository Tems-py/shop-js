import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../product/Product";

const Orders = (props) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:3001/admin/orders").then((response) => {
            console.log(response.data);
            setOrders(response.data);
        });
    }, []);

    return (
        <div className="flex flex-col gap-3 w-fit">
            <h1 className="text-2xl font-bold text-center">Zamowienia</h1>
            <table className="text-center">
                <tr className="border-b border-gray-200 p-3 text-lg font-bold">
                    <td>Id</td>
                    <td>Adres</td>
                    <td>Produkty</td>
                    <td>Email</td>
                    <td>Numer telefonu</td>
                </tr>
                {orders.map((order, i) => (
                    <tr key={i} className="border-b border-gray-200 p-3">
                        <td className="m-3">{order.at(-1).id}</td>
                        <td className="m-3">{order.at(-1).address}</td>
                        <td className="m-3">
                            {order
                                .filter((o, i) => {
                                    return o.product;
                                })

                                .map((product, i) => (
                                    <span
                                        key={i}
                                        className="flex flex-row gap-3"
                                    >
                                        <img
                                            src={product.product.imageUrl}
                                            alt=""
                                            className="h-8 rounded-md"
                                        />
                                        <span>
                                            {product.product.name} x{" "}
                                            {product.quantity}
                                        </span>
                                    </span>
                                ))}
                        </td>
                        <td className="m-3">{order.at(-1).email}</td>
                        <td className="m-3">{order.at(-1).telephone}</td>
                        {/* <td>{JSON.stringify(order)}</td> */}
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Orders;
