import Product from "../product/Product";

const ProductList = (props) => {
    const { products, cartHook } = props;
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

        setCart(cart.slice());
    };

    return (
        <div className="grid grid-cols-3 gap-3 w-fit">
            {products.map((product) => (
                <Product
                    product={product}
                    addToCart={addToCart}
                    key={product.id}
                />
            ))}
        </div>
    );
};

export default ProductList;
