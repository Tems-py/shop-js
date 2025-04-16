import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import "axios";
import axios from "axios";
import ProductList from "./components/pages/ProductsList";
import ErrorPage from "./components/pages/ErrorPage";
import AddProduct from "./components/pages/AddProduct";
import Cart from "./components/pages/Cart";

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
        "/": <ProductList products={products} cartHook={[cart, setCart]} />,
        "/add-product": <AddProduct knownattributes={knownAttributes} />,
        "/cart": <Cart cartHook={[cart, setCart]} />,
        default: <ErrorPage />,
    };

    const getPage = (path) => {
        if (Object.keys(pages).includes(path)) {
            return pages[path];
        }
        return pages["default"];
    };

    useEffect(() => {
        axios.get("http://127.0.0.1:3001/products").then((response) => {
            console.log(response.data);
            setProducts(response.data);
        });
    }, []);

    return (
        <div className="flex w-full flex-col items-center bg-gray gap-3">
            <NavBar currentPageHook={[currentPage, setCurrentPage]} />
            {getPage(currentPage)}
        </div>
    );
}

export default App;
