import React from "react";

const WeatherBox = ({ weather }) => {
    return (
        <div>
            <h3>{weather?.name}</h3>
            <h3>{weather?.main.temp}</h3>
            <p>{weather?.weather[0].description}</p>
        </div>
    );
};

export default WeatherBox;
