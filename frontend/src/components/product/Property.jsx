const Property = (props) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="font-sm text-gray-700">{props.text}</div>
            <div className="text-indigo-500">{props.value}</div>
        </div>
    );
};

export default Property;
