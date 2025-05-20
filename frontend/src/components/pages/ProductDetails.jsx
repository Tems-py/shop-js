import axios from "axios";
import Product from "../product/Product";

const ProductDetails = (props) => {
    const {
        products,
        cartHook,
        addNotification,
        adminView,
        deleteProduct,
        currentPageHook,
    } = props;
    const [cart, setCart] = cartHook;
    const [currentPage, setCurrentPage] = currentPageHook;

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

    const formHandler = (event) => {
        event.preventDefault();

        axios.post("http://127.0.0.1:3001/admin/delete_product", {
            id: product.id,
        });

        deleteProduct(product);
        setCurrentPage("/admin_products");
        window.history.pushState(null, null, "/admin_products");
    };

    return (
        <div className="flex flex-col gap-3">
            {product && <Product product={product} addToCart={addToCart} />}
            {product && adminView && (
                <a
                    className="p-3 border border-indigo-300 rounded md text-center"
                    href={"/edit-product/" + product.id}
                >
                    Edytuj produkt
                </a>
            )}
            {product && adminView && (
                <button
                    className="p-3 border border-red-300 rounded md text-center"
                    onClick={formHandler}
                >
                    Usuń produkt
                </button>
            )}
        </div>
    );
};

export default ProductDetails;
