import React from "react";
import styled from "styled-components";
const ReviewButton = ({ onClick }) => {
    return <Text onClick={onClick}>REVIEW🔻</Text>;
};

export default ReviewButton;

const Text = styled.div`
    font-size: 50px;
    font-weight: bold;
    z-index: 99;
    cursor: pointer;
    color: #e50914;
    animation: blink 1.5s infinite;
    transition: transform 0.1s;

    &:hover {
        transform: scale(1.5);
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.3;
        }
    }

    @media (max-width: 768px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 30px;
    }
`;
