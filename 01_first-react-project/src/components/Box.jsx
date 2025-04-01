import React from "react";

const Box = (props) => {
    //cosole.log("props:",props)
    return (
        <div>
            <div className="box">
                Box {props.num}
                <p>{props.name}</p>
            </div>
        </div>
    );
};

export default Box;
