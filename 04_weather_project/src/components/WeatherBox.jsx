import React from "react";
import styled from "styled-components";
function WeatherBox({ weather }) {
    console.log("weather", weather);

    return (
        <WeatherBoxContainer>
            {/* <div>{weather && weather.name}</div> */}
            <div>{weather?.name}</div>

            <div>
                {weather?.main.temp}℃/
                {Math.round((weather?.main.temp * 9) / 5 + 32)}℉
            </div>
            <div>{weather?.weather[0].description}</div>
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
