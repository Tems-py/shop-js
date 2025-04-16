const NavBar = (props) => {
    const { currentPageHook } = props;
    const [currentPage, setCurrentPage] = currentPageHook;

    const navigateTo = (location) => {
        setCurrentPage(location);
        window.history.pushState(null, null, location);
    };

    const elements = [
        { name: "Strona główna", path: "/" },
        { name: "Koszyk", path: "/cart" },
        { name: "Dodaj produkt", path: "/add-product" },
    ];

    return (
        <div className="w-full bg-gray-300 p-3 lg:mx-12 mt-3 rounded-md">
            <ul className="flex flex-col md:flex-row gap-3">
                {elements.map((elem, i) => (
                    <li
                        key={i}
                        className={
                            "text-violet-500 " +
                            (elem.path == currentPage ? "font-bold" : "")
                        }
                        onClick={() => navigateTo(elem.path)}
                    >
                        {elem.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavBar;
