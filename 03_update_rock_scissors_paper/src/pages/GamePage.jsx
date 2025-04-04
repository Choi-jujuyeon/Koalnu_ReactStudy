import React, { useState } from "react";
import styled from "styled-components";
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
    paper: {
        name: "Paper",
        imgUrl: "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-98d8-51f7-b47a-71c0eaeac941/raw?se=2025-04-03T17%3A12%3A55Z&sp=r&sv=2024-08-04&sr=b&scid=41a351bc-5785-5cd5-8213-558cae2b5136&skoid=7c382de0-129f-486b-9922-6e4a89c6eb7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-03T06%3A04%3A22Z&ske=2025-04-04T06%3A04%3A22Z&sks=b&skv=2024-08-04&sig=Sen1aVag1Uv0dU0Mi22FCWZNqNomYfrP2THebfXT0g4%3D",
    },
};

function GamePage() {
    const [userSelect, setUserSelect] = useState(null);

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
    };

    return (
        <GameContainer>
            <h1>Rock Scissors Paper!</h1>
            <ButtonContainer>상태바 들어 갈예정</ButtonContainer>

            <GameBox title="Computer" />
            <div>VS</div>
            <GameBox title="You" item={userSelect} />

            <ButtonContainer>
                <button onClick={() => play("scissors")}>가위1</button>
                <button onClick={() => play("rock")}>바위</button>
                <button onClick={() => play("paper")}>보</button>
            </ButtonContainer>
        </GameContainer>
    );
}

export default GamePage;

// Styled Components
const GameContainer = styled.div`
    position: absolute;
    background-color: aliceblue;
    overflow: hidden;
    width: 375px;
    height: 812px;
    border-radius: 30px;
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const ButtonContainer = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    button {
        margin: 18px;
        cursor: pointer;
        z-index: 10;
    }
`;
