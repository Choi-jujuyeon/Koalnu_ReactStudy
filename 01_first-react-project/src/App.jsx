import "./App.css";
import Box from "./components/Box";
import { useState } from "react";
/* 주의할점!
-> 버튼을 클릭
: re render시 변수는 계속 초기화 , state값은 비동기처리된다!

-> step01. counter+=1
-> step02. setState 함수 호출
-> step03. console.log실행
            : 변수 값 1로 변경 + state 값은 아직 안 변함(이전 값이 보인다)
            : 함수 끝
-> step04. app 다시 re render
            : 변수는 다시 0으로 초기화 된다
            : state값은 update 되면서 다시 render을 한다!
*/
function App() {
    let counter = 0;
    const [counter2, setCounter2] = useState(0);

    const increase = () => {
        counter = counter + 1;
        setCounter2(counter2 + 1);
        console.log("counter 는", counter, "counter2는", counter2);
    };
    return (
        <div>
            <div>{counter}</div>
            <div>state:{counter2}</div>
            <button onClick={increase}>클릭</button>
            {/* <Box name="rora" num="1" /> */}
        </div>
    );
}

export default App;
