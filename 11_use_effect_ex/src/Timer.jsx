import { useEffect } from "react";
const Timer = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("count 실행");
        }, 1000);

        return () => {
            console.log("타이머 종료됌");
            clearInterval(interval);
        };
    }, []);
    return <div>Timer</div>;
};

export default Timer;
