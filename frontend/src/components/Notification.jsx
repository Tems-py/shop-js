const Notification = (props) => {
    let { message, color, title } = props;
    if (color == null) color = "bg-red-300";

    return (
        <div className="rounded w-64 h-fit bg-gray-200 notification">
            <div className={`${color} font-lg p-2 rounded-t-lg font-lg`}>
                {title}
            </div>
            <div className="p-2">{message}</div>
        </div>
    );
};

export default Notification;
