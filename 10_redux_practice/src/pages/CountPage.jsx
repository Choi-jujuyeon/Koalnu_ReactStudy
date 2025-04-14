import React from "react";
import { useState } from "react";
const CountPage = () => {
    const [num, setNum] = useState(0);
    const plus = () => {
        setNum(num + 1);
    };
    const miner = () => {
        setNum(num - 1);
    };
    return (
        <div>
            <button onClick={miner}>-</button>
            <h1>{num}</h1>
            <button onClick={plus}>+</button>
        </div>
    );
};

export default CountPage;
