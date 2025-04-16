import { useState, useEffect } from "react";
import "./App.css";
import Timer from "./Timer";

const App = () => {
    const [count, setCount] = useState(0);
    const [showTimer, setShowTimer] = useState(true);
    const handleClick = () => {
        setCount((prev) => prev + 1);
    };

    useEffect(() => {
        console.log("앱시작");
    }, []);

    useEffect(() => {
        console.log("업데이트");
    }, [count]);

    return (
        <div className="App">
            {console.log("렌더!!!!")}
            <h1>{count}</h1>
            <button onClick={handleClick}>증가</button>
            <button onClick={() => setShowTimer((prev) => !prev)}>
                타이머 보이기
            </button>
            {showTimer && <Timer />}
        </div>
    );
};

export default App;
