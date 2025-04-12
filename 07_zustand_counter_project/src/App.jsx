import React from "react";
import { useState } from "react";
import CountBox from "./components/CountBox";
import counterStore from "./stores/counterStore";
const App = () => {
    // const [count, setCount] = useState(0);
    const { count, increase, increaseBy } = counterStore();
    return (
        <div>
            <h1>count: {count}</h1>
            {/* <CountBox count={count} /> */}
            <button onClick={increase}>increase</button>
            <button onClick={() => increaseBy(10)}>10씩 증가!increase</button>

            <CountBox />
        </div>
    );
};

export default App;
