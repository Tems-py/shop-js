import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import "axios";
import axios from "axios";
import ProductList from "./components/pages/ProductsList";
import ErrorPage from "./components/pages/ErrorPage";
import AddProduct from "./components/pages/AddProduct";
import Cart from "./components/pages/Cart";
import Notification from "./components/Notification";
import ProductDetails from "./components/pages/ProductDetails";
import EditProduct from "./components/pages/EditProduct";
import Orders from "./components/pages/Orders";

// const DEFAULT_PRODUCTS = [
//     {
//         name: "Silver Monkey X Mandrill",
//         img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg",
//         properties: [
//             { text: "Przeznaczenie", value: "Gaming" },
//             { text: "Przełączniki", value: "Membranowe" },
//             { text: "Rodzaj", value: "Przewodowa" },
//             { text: "Podświetlenie", value: "Wielokolorowe" },
//         ],
//         price: 99.0,
//         freeDelivery: true,
//     },
// ];

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const [notifications, setNotification] = useState([]);
    const [address, setAddress] = useState({
        postCode: "",
        city: "",
        street: "",
        building: "",
        telephone: "",
    });

    const addNotification = (title, message, time = 3000, color = null) => {
        const notification = {
            title: title,
            message: message,
            color: color,
        };
        setTimeout(() => {
            setNotification((n) => n.filter((b) => b !== notification));
        }, time);
        setNotification((n) => {
            const x = n.slice();
            x.push(notification);
            return x;
        });
    };

    const updateProduct = (product) => {
        setProducts((products) => {
            products = products.filter((p) => p.id !== product.id);
            return [product, ...products];
        });
    };

    useEffect(() => {
        axios.get("http://127.0.0.1:3001/products").then((response) => {
            console.log(response.data);
            setProducts(response.data);
        });
    }, []);

    let knownAttributes = {};
    products.forEach((e) => {
        e.properties.forEach((p) => {
            if (knownAttributes[p.text] === undefined) {
                knownAttributes[p.text] = ["", p.value];
            } else {
                knownAttributes[p.text].push(p.value);
            }
        });
    });

    for (let i in knownAttributes) {
        knownAttributes[i] = [...new Set(knownAttributes[i])];
    }

    const pages = {
        "/add-product": <AddProduct knownattributes={knownAttributes} />,
        "/orders": <Orders />,
        "/edit-product/.+": (
            <EditProduct
                products={products}
                knownattributes={knownAttributes}
                updateProduct={updateProduct}
            />
        ),
        "/cart": (
            <Cart
                cartHook={[cart, setCart]}
                addressHook={[address, setAddress]}
            />
        ),
        "/product/.+": (
            <ProductDetails
                products={products}
                cartHook={[cart, setCart]}
                addNotification={addNotification}
            />
        ),
        default: <ErrorPage />,
        "/": (
            <ProductList
                products={products}
                cartHook={[cart, setCart]}
                addNotification={addNotification}
            />
        ),
    };

    const getPage = (path) => {
        for (let page in pages) {
            if (new RegExp(page).test(path)) {
                return pages[page];
            }
        }
        return pages["default"];
    };

    return (
        <div className="flex w-full flex-col items-center bg-gray gap-3">
            <NavBar currentPageHook={[currentPage, setCurrentPage]} />
            {getPage(currentPage)}
            <div className="flex flex-col gap-3 notifications">
                {notifications.map((n, i) => (
                    <Notification
                        key={i}
                        message={n.message}
                        title={n.title}
                        color={n.color}
                    ></Notification>
                ))}
            </div>
        </div>
    );
}

export default App;
