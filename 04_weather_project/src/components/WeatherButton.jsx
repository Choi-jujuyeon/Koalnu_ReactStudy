import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
function WeatherButton() {
    return (
        <WeatherButtonContainer>
            {/* 리액트 전용 부트스트랩 */}
            <Button variant="warning">Current Location</Button>
            <Button variant="warning">Paris</Button>
            <Button variant="warning">Egypt</Button>
        </WeatherButtonContainer>
    );
}

export default WeatherButton;
const WeatherButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    /* height: 100vh; */
`;
