import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const WeatherButton = ({ cities, setCity, selectedCity }) => {
  return (
    <WeatherButtonContainer>
      {cities.map((item) => (
        <Button
          key={item}
          variant={selectedCity === item || (item === "Current location" && selectedCity === "") ? "warning" : "outline-warning"}
          onClick={() => {
            setCity(item === "Current location" ? "" : item);
          }}
        >
          {item}
        </Button>
      ))}
    </WeatherButtonContainer>
  );
};

export default WeatherButton;

const WeatherButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap; // 버튼 줄바꿈

  @media (max-width: 600px) {
    flex-direction: column; // 세로로 정렬
    gap: 10px;
  }
`;
