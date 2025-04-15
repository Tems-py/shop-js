const NavBar = () => {
    const navigateTo = (location) => {
        window.location = location;
    };

    return (
        <div className="w-full bg-gray-300 p-3 lg:mx-12 mt-3 rounded-md">
            <ul className="flex flex-col md:flex-row gap-3">
                <li
                    className="text-violet-500 font-bold"
                    onClick={() => navigateTo("/")}
                >
                    Strona główna
                </li>
                <li
                    className="text-violet-500 font-bold"
                    onClick={() => navigateTo("/cart")}
                >
                    Koszyk
                </li>
                <li
                    className="text-violet-500 font-bold"
                    onClick={() => navigateTo("/add-product")}
                >
                    Dodaj produkt
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
