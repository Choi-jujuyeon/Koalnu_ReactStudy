import "./App.css";
import { useState } from "react";
import Box from "./components/Box";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보인다.
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 3. 3~4의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검정)
const choice = {
    rock: {
        name: "Rock",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0NxJjC9Jf1iYlOkqwrse1w0pBRAiO5rIdQ&s",
    },
    scissors: {
        name: "Scissors",
        imgUrl: "data:image/png;base64,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",
    },
    paper: {
        name: "Paper",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByxl21CEOgZgxly6ILu-ZE39e6RrAGFSQGw&s",
    },
};
function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState("empty");

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);

        setResult(judgement(choice[userChoice], computerChoice));
    };

    const judgement = (user, computer) => {
        //console.log("user: ", user, "computer", computer);

        if (user.name === computer.name) {
            return "tie";
        } else if (user.name === "Rock")
            return computer.name === "Scissors" ? "win" : "lose";
        else if (user.name === "Scissors")
            return computer.name === "Paper" ? "win" : "lose";
        else if (user.name === "Paper")
            return computer.name === "Rock" ? "win" : "lose";
    };
    const randomChoice = () => {
        let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 arr로 만들어주는 함수
        //console.log("Items array", itemArray);

        let randomItem = Math.floor(Math.random() * itemArray.length);
        //console.log("randomVal:", randomItem);

        let final = itemArray[randomItem];
        return choice[final];
    };

    return (
        <div>
            <div className="container">
                <Box title="You" items={userSelect} result={result} />
                <Box title="Computer" items={computerSelect} result={result} />
            </div>
            <div className="container">
                <button onClick={() => play("scissors")}>가위</button>
                <button onClick={() => play("rock")}>바위</button>
                <button onClick={() => play("paper")}>보</button>
            </div>
        </div>
    );
}

export default App;
