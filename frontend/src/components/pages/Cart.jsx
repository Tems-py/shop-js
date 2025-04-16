import Product from "../product/Product";

const Cart = (props) => {
    const { cartHook } = props;
    const [cart, setCart] = cartHook;

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
                        <button>⬆</button>
                        <div>{product.quantity}</div>
                        <button>⬇</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
