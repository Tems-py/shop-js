import Property from "./Property";
import Price from "./Price";

function loopForProperties(properties) {
    const ps = [];
    properties.forEach((p, i) => {
        ps.push(<Property text={p.text} value={p.value} key={i} />);
    });
    return ps;
}

function delivery(d) {
    if (d) {
        return <div className="free-delivery">Darmowa dostawa</div>;
    }
}

const Product = (props) => {
    return (
        <div className="p-3 flex flex-col border border-indigo-300 rounded-md">
            <div className="w-full flex align-center justify-center">
                <img
                    className="w-max-64 h-64"
                    src={props.product.imageUrl}
                    alt={props.product.name}
                ></img>
            </div>
            <div className="font-bold text-lg">{props.product.name}</div>
            <div>{loopForProperties(props.product.properties)}</div>
            <Price>{props.product.price}</Price>
            {/* {delivery(props.product.freeDelivery)} */}
            <div className="grid grid-cols-2 place-content-between gap-6 mt-4">
                <button className="p-3 border border-indigo-300 rounded-md">
                    🛒
                </button>
                <button className="p-3 border border-indigo-300 rounded-md">
                    👀👀
                </button>
            </div>
        </div>
    );
};

export default Product;
