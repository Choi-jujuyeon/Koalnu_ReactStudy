import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingSpinner = ({ loading }) => {
    if (!loading) return null;

    return (
        <SpinnerViewBox viewBox="25 25 50 50">
            <SpinnerCircle r="20" cy="50" cx="50" />
        </SpinnerViewBox>
    );
};

export default LoadingSpinner;

// 애니메이션 정의
const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
`;

// styled SVG와 Circle
const SpinnerViewBox = styled.svg`
    width: 3.25em;
    transform-origin: center;
    animation: ${rotate} 2s linear infinite;
    margin-top: 100px;
`;

const SpinnerCircle = styled.circle`
    fill: none;
    stroke: hsl(214, 97%, 59%);
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
`;
