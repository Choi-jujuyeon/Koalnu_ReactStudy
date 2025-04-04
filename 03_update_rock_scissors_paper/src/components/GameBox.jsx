import React from "react";
import styled from "styled-components";

function GameBox({ title, image }) {
    return (
        <BoxContainer>
            <Title>{title}</Title>
            <Image src={image} alt="게임 이미지" />
        </BoxContainer>
    );
}

export default GameBox;

const BoxContainer = styled.div`
    border: 1px solid black;
    width: 90%;
    height: 250px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    z-index: 9;
    color: #fff;
`;

const Title = styled.h2`
    margin-left: 20px;
`;

const Image = styled.img`
    position: absolute;
    z-index: -1;
    margin: auto;
    height: 100%;
    width: 100%;
`;
