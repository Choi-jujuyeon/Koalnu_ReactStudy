import React from "react";
import styled from "styled-components";

const ProductCard = ({ item }) => {
    return (
        <Container>
            <img src={item?.img} alt="" />

            <Choice>{item?.new === true ? "concious choice" : ""}</Choice>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <Sin>{item?.new === true ? "신상품" : ""}</Sin>
        </Container>
    );
};

export default ProductCard;

const Container = styled.div`
    img {
        width: 100%;
        height: auto;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: block;
        border-radius: 12px;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }
    }
    cursor: pointer;
`;

const Choice = styled.div`
    margin-top: 13px;
`;
const Sin = styled.div`
    margin-bottom: 13px;
`;
