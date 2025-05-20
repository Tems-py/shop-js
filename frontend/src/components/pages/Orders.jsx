import axios from "axios";
import { useEffect, useState } from "react";

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
            <table className="">
                <tr>
                    <td>Id</td>
                    <td>Adres</td>
                    <td>Produkty</td>
                    <td>Cena</td>
                </tr>
                {orders.map((order, i) => (
                    <tr key={i}>
                        {order}
                        <td className="">{order.id}</td>
                        <td>
                            {order.products.map((product, i) => (
                                <span key={i}>
                                    <img src={product.image} alt="" />
                                    <span>{product.name}</span>
                                </span>
                            ))}
                        </td>
                        <td>{order.price}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Orders;
