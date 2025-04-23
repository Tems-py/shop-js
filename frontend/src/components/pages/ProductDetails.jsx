import Product from "../product/Product";

const ProductDetails = (props) => {
    const { products, cartHook, addNotification } = props;
    const [cart, setCart] = cartHook;

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

    const product = products;

    return (
        <div className="grid grid-cols-3 gap-3 w-fit">
            {product && <Product product={product} addToCart={addToCart} />}
        </div>
    );
};

export default ProductDetails;
