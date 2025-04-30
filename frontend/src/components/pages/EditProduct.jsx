import { useState } from "react";
import axios from "axios";
import Property from "../product/Property";

const EditProduct = (props) => {
    const { products } = props;
    const [product, setProduct] = useState({
        id: null,
        name: null,
        imageUrl: null,
        description: null,
        price: null,
        properties: [],
    });
    const hrefId = Number(window.location.pathname.split("/")[2]);

    const tempProduct = products.filter((p) => p.id == hrefId)[0];

    const [newAttributeKey, setNewAttributeKey] = useState("");
    const [newAttributeValue, setNewAttributeValue] = useState("");
    const [attributes, setAttributes] = useState(
        product.attributes ? product.attributes : []
    );

    if (tempProduct) {
        if (!product.id) {
            setProduct(tempProduct);
            setAttributes(tempProduct.attributes);
        }
    }

    console.log(props.knownattributes);

    const addNewAttribute = (event) => {
        if (newAttributeKey === "") return;
        if (newAttributeValue === "") return;
        setAttributes((old) => {
            const l = [
                { text: newAttributeKey, value: newAttributeValue },
                ...old,
            ];
            console.log(l);
            return l;
        });
        setNewAttributeKey("");
        setNewAttributeValue("");
    };

    const formHandler = (event) => {
        event.preventDefault();

        // axios.post("http://127.0.0.1:3001/admin/edit-product", {
        //     id: product.id,
        //     name: productName,
        //     imageUrl: productImage,
        //     properties: attributes,
        //     price: productPrice,
        //     description: "description",
        // });

        // props.addProductHandler(product);
    };

    const handleChange = (e) =>
        setProduct((product) => ({
            ...product,
            [e.target.name]: e.target.value,
        }));
    return (
        <>
            <h1 className="text-center text-xl">Edytuj produkt</h1>
            <form
                onSubmit={formHandler}
                className="flex flex-col gap-3 p-3 rounded-md border border-indigo-500 background-gray-100"
            >
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-3 justify-between">
                        <input
                            type="text"
                            placeholder="Nazwa"
                            value={product.name}
                            onChange={handleChange}
                            name="name"
                            className="p-3 border-b-4 border-indigo-500 transition"
                        />

                        <input
                            type="text"
                            placeholder="Link do obrazka"
                            value={product.imageUrl}
                            onChange={handleChange}
                            name="imageUrl"
                            className="p-3 border-b-4 border-indigo-500"
                        />
                    </div>
                    <img
                        src={product.imageUrl}
                        alt="Obrazek produktu"
                        className="w-32 h-32 p-3 rounded-md border border-indigo-500"
                    ></img>
                </div>
                <input
                    type="number"
                    placeholder="Cena"
                    value={product.price}
                    onChange={handleChange}
                    name="price"
                    className="p-3 border-b-4 border-indigo-500"
                />
                <div className="flex flex-row gap-3 align-center justify-between">
                    <input
                        type="text"
                        placeholder="Nazwa atrybutu"
                        value={newAttributeKey}
                        onChange={(e) => setNewAttributeKey(e.target.value)}
                        list="knownattributes"
                        className="p-3 border-b-4 border-indigo-500"
                    />
                    <input
                        type="text"
                        placeholder="Zawartość atrybutu"
                        value={newAttributeValue}
                        onChange={(e) => setNewAttributeValue(e.target.value)}
                        autoComplete="false"
                        className="p-3 border-b-4 border-indigo-500"
                    />
                    <input
                        type="button"
                        value="Dodaj atrybut"
                        onClick={addNewAttribute}
                        className="p-3 border border-indigo-600 bg-indigo-500 rounded-md font-lg text-white font-bold"
                    />
                    <datalist id="knownattributes">
                        {Object.keys(props.knownattributes).map((p, i) => (
                            <option key={i}>{p}</option>
                        ))}
                    </datalist>
                </div>
                <div>
                    {product.properties.map((a, i) => (
                        <Property key={i} text={a.text} value={a.value} />
                    ))}
                </div>
                <input
                    type="submit"
                    value="Dodaj produkt"
                    className="p-3 border border-indigo-600 bg-indigo-500 rounded-md font-lg text-white font-bold"
                />
            </form>
        </>
    );
};

export default EditProduct;
