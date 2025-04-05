import React from "react";
import { Button, FigureCaption } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const WeatherButton = ({cities,setCity}) => {
    // console.log("citi: ",cities)

    // const 
    return (
        <WeatherButtonContainer>
            {cities.map((item) =>item === "Current location" ?
            (<Button key={item} variant="warning" onClick={() => setCity("")}>{item}</Button>) : 
            (<Button key={item} variant="warning" onClick={() => setCity(item)}>{item}</Button>)
            )}
        </WeatherButtonContainer>
    );
}

export default WeatherButton;

const WeatherButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 18px;

`;