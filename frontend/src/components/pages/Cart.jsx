import axios from "axios";
import Product from "../product/Product";

const Cart = (props) => {
    const { cartHook } = props;
    const [cart, setCart] = cartHook;

    const updateQuantity = (index, q) => {
        return;
        setCart((c) => {
            let cart = c.slice();
            cart[index].quantity += q;
            return cart;
        });
        console.log(cart);
    };

    const createOrder = () => {
        axios.post("http://localhost:3001/new_order", {
            cart: cart.map((p) => ({ id: p.product.id, quantity: p.quantity })),
            address: "Łączna łupinki",
        });
    };

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-center">Koszyk</h1>
            {cart.map((product, i) => (
                <div
                    className="border border-indigo-500 p-3 rounded-md flex flex-row justify-between items-center"
                    key={i}
                >
                    <div className="flex flex-row gap-3 items-center">
                        <img
                            src={product.product.imageUrl}
                            alt=""
                            className="h-32 w-32"
                        />
                        <div>{product.product.name}</div>
                        <div>{product.product.price}zł</div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-center">
                        {/* <button onClick={() => updateQuantity(i, 0.5)}>
                            ⬆
                        </button> */}
                        <div>{product.quantity}</div>
                        {/* <button onClick={() => updateQuantity(i, -0.5)}>⬇</button> */}
                    </div>
                </div>
            ))}
            <button
                onClick={createOrder}
                className="p-3 rounded-md border-indigo-400 border font-xl bg-indigo-300"
            >
                Złóż zamówienie
            </button>
        </div>
    );
};

export default Cart;
