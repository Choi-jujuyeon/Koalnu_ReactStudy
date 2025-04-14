import React from "react";
import { useSelector } from "react-redux";

const Box = () => {
    let count = useSelector((state) => state.count);
    return (
        <div>
            <h1>This is Box {count}</h1>
        </div>
    );
};

export default Box;
