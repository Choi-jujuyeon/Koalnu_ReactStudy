import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CountPage = () => {
    const count = useSelector((state) => state.count);

    const plus = () => {
        // action던져주기
        dispatch({ type: "INCREMENT" });
    };
    const miner = () => {
        dispatch({ type: "DECREASE" });
    };

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={miner}>-</button>
            <h1>{count}</h1>
            <button onClick={plus}>+</button>
        </div>
    );
};

export default CountPage;
