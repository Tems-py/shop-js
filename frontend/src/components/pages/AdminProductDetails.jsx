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

    const hrefId = Number(window.location.pathname.split("/")[2]);
    const product = products.filter((p) => p.id == hrefId)[0];

    return (
        <div className="flex flex-col gap-3">
            {product && <Product product={product} addToCart={addToCart} />}
            {product && (
                <a
                    className="p-3 border border-indigo-300 rounded md text-center"
                    href={"/edit-product/" + product.id}
                >
                    Edytuj produkt
                </a>
            )}
        </div>
    );
};

export default ProductDetails;
