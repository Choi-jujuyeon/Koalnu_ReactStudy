import React from "react";
import styled from "styled-components";
function WeatherBox() {
    return (
        <WeatherBoxContainer>
            <div>서울</div>
            <div>30도</div>
            <div>화씨</div>
        </WeatherBoxContainer>
    );
}

export default WeatherBox;
const WeatherBoxContainer = styled.div`
    border: 4px solid white;
    padding: 50px;
    width: 500px;
    background-color: aliceblue;
    border-radius: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
