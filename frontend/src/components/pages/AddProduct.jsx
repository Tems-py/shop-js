import { useState } from "react";
import axios from "axios";
import Property from "../product/Property";

const AddProduct = (props) => {
    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState(0.0);
    const [newAttributeKey, setNewAttributeKey] = useState("");
    const [newAttributeValue, setNewAttributeValue] = useState("");
    const [attributes, setAttributes] = useState([]);

    console.log(props.knownattributes);

    const nameChangeHandler = (event) => {
        setProductName(event.target.value);
    };

    const imageChangeHandler = (event) => {
        setProductImage(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setProductPrice(event.target.value);
    };

    const newAttributeKeyHandler = (event) => {
        setNewAttributeKey(event.target.value);
    };

    const newAttributeValueHandler = (event) => {
        setNewAttributeValue(event.target.value);
    };

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

        setProductImage("");
        setProductPrice("");
        setProductName("");

        axios.post("http://127.0.0.1:3001/admin/add-product", {
            name: productName,
            imageUrl: productImage,
            properties: attributes,
            price: productPrice,
            description: "description",
        });

        // props.addProductHandler(product);
    };
    return (
        <>
            <h1 className="text-center text-xl">Dodaj nowy produkt</h1>
            <form
                onSubmit={formHandler}
                className="flex flex-col gap-3 p-3 rounded-md border border-indigo-500 background-gray-100"
            >
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-3 justify-between">
                        <input
                            type="text"
                            placeholder="Nazwa"
                            value={productName}
                            onChange={nameChangeHandler}
                            id="name"
                            style={{
                                transform:
                                    "translateX(" +
                                    (productName == "" ? -1 : 0) +
                                    "px)",
                            }}
                            className="p-3 border-b-4 border-indigo-500 transition"
                        />

                        <input
                            type="text"
                            placeholder="Link do obrazka"
                            value={productImage}
                            onChange={imageChangeHandler}
                            className="p-3 border-b-4 border-indigo-500"
                        />
                    </div>
                    <img
                        src={productImage}
                        alt="Obrazek produktu"
                        className="w-32 h-32 p-3 rounded-md border border-indigo-500"
                    ></img>
                </div>
                <input
                    type="number"
                    placeholder="Cena"
                    value={productPrice}
                    onChange={priceChangeHandler}
                    id="price"
                    className="p-3 border-b-4 border-indigo-500"
                />
                <div className="flex flex-row gap-3 align-center justify-between">
                    <input
                        type="text"
                        placeholder="Nazwa atrybutu"
                        value={newAttributeKey}
                        onChange={newAttributeKeyHandler}
                        list="knownattributes"
                        className="p-3 border-b-4 border-indigo-500"
                    />
                    <input
                        type="text"
                        placeholder="Zawartość atrybutu"
                        value={newAttributeValue}
                        onChange={newAttributeValueHandler}
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
                    {attributes.map((a, i) => (
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

export default AddProduct;
