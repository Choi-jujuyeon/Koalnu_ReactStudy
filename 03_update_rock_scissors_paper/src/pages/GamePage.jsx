import React from "react";
import GameBox from "../components/GameBox";

function GamePage() {
    return (
        <div className="gameContainer">
            <h1>Rock Scissors Paper!</h1>
            <div className="buttonContainer">상태바 들어갈예정</div>

            {/* 컴퓨터먼저 */}
            <GameBox />
            <div>VS</div>
            <GameBox />
            <div className="buttonContainer">
                <button>버튼1</button>
                <button>버튼2</button>
                <button>버튼3</button>
            </div>
        </div>
    );
}

export default GamePage;
