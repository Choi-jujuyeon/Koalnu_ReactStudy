import React from "react";

function GameBox(props) {
    return (
        <div className="boxContainer">
            <h2>{props.title}</h2>
            <img
                src="data:image/jpeg;base64,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"
                alt=""
            />
        </div>
    );
}

export default GameBox;
