const Price = (props) => {
    return (
        <div className="text-right">
            <span className="text-5xl font-bold text-indigo-600">
                {props.children}
            </span>
            <span className="font-sm text-gray-600">zł</span>
        </div>
    );
};

export default Price;
