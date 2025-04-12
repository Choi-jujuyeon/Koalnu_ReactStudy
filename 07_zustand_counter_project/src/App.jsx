import React from "react";
import { useState } from "react";
import CountBox from "./components/CountBox";
const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>count: {count}</h1>
            <CountBox count={count} />
        </div>
    );
};

export default App;
