import React from "react";
import styled from "styled-components";

function GameBox({ title, item, result }) {
    return (
        <BoxContainer>
            <Title>{title}</Title>
            <ImageBox>
                {/* 이미지를 선택하기 전 오류 방지지 */}
                <img src={item && item.imgUrl} alt="" />
                <Result>{result}</Result>
            </ImageBox>
        </BoxContainer>
    );
}

export default GameBox;

// Styled Components
const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    color: black;
    margin-bottom: 10px;
    margin-top: 0px;
`;

const ImageBox = styled.div`
    border: 1px solid black;
    border-radius: 30px;
    width: 300px;
    height: 200px;
    background-color: #ffebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const Result = styled.h1`
    position: absolute;
    z-index: 9;
    font-size: 70px;
`;
