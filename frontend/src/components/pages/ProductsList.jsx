import Product from "../product/Product";

const ProductList = (props) => {
    const { products } = props;
    return (
        <div className="grid grid-cols-3 gap-3 w-fit">
            {products.map((product) => (
                <Product product={product} />
            ))}
        </div>
    );
};

export default ProductList;
