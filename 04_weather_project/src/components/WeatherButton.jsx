import React from "react";
import { Button, FigureCaption } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const WeatherButton = ({cities}) => {
    console.log("citi: ",cities)
    return (
        <WeatherButtonContainer>
            {/* 리액트 전용 부트스트랩 */}
            
            {cities.map((item)=>(
                <Button variant="warning" >{item}</Button>
            ))}
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