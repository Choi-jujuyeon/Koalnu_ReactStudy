import React from "react";
import GameBox from "../components/GameBox";

// 객체 생성
const choice = {
    rock: {
        name: "Rock",
        imgUrl: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-9b88-51f7-9f02-767388831ae0/raw?se=2025-04-03T17%3A01%3A25Z&sp=r&sv=2024-08-04&sr=b&scid=da2ca042-1b7c-5797-a13d-562a3c8c3cc5&skoid=7c382de0-129f-486b-9922-6e4a89c6eb7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-03T05%3A48%3A53Z&ske=2025-04-04T05%3A48%3A53Z&sks=b&skv=2024-08-04&sig=HiTxNFpFYsagxLYu7blCmOR91RFgZiw8ifVt3AjmQiY%3D",
    },
    scissors: {
        name: "Scissors",
        imgUrl: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-157c-51f7-b0ea-46bc82792da7/raw?se=2025-04-03T16%3A58%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=7d194876-58dd-540c-a89b-edc39ef8735c&skoid=7c382de0-129f-486b-9922-6e4a89c6eb7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-03T10%3A57%3A42Z&ske=2025-04-04T10%3A57%3A42Z&sks=b&skv=2024-08-04&sig=HYUCyGRc2azAhx0GsZxSF8NOU1brizrCHvPA/ZNWslc%3D",
    },
    paper: { name: "Paper", imgUrl: "" },
};

function GamePage() {
    const play = (userChoice) => {
        console.log(choice[userChoice]);
    };

    return (
        <div className="gameContainer">
            <h1>Rock Scissors Paper!</h1>
            <div className="buttonContainer">상태바 들어 갈예정</div>

            {/* 컴퓨터먼저 */}
            <GameBox title="Computer" />
            <div>VS</div>
            <GameBox title="You" />

            <div className="buttonContainer">
                <button onClick={() => play("scissors")}>가위1</button>
                <button onClick={() => play("rock")}>가위2</button>
                <button onClick={() => play("paper")}>가위3</button>
            </div>
            {/* <button>안녕</button> */}
        </div>
    );
}

export default GamePage;
