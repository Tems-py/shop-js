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
            {orders.map((order, i) => (
                <div
                    className="border border-indigo-500 p-3 rounded-md flex flex-row justify-between items-center gap-3"
                    key={i}
                >
                    {JSON.stringify(order)}
                </div>
            ))}
        </div>
    );
};

export default Orders;
