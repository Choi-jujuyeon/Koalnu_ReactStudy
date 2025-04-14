import React from "react";
import { useSelector } from "react-redux";
const GrandBox = () => {
    let count = useSelector((state) => state.count);
    return (
        <div>
            <h3>This is GrandBox {count}</h3>
        </div>
    );
};

export default GrandBox;
