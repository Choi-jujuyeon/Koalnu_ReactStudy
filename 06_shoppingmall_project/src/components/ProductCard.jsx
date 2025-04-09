import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };
    return (
        <Container onClick={showDetail}>
            <img src={item?.img} alt="" />
            <Text>
                <Choice>{item?.new === true ? "concious choice" : ""}</Choice>
                <div>{item?.title}</div>
                <div>{item?.price}</div>
                <Sin>{item?.new === true ? "신상품" : ""}</Sin>
            </Text>
        </Container>
    );
};

export default ProductCard;

const Container = styled.div`
    /* background-color: #048aff; */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    img {
        width: 100%;
        transition: transform 0.3s ease;
    }
    img:hover {
        transform: scale(1.05);
    }
    cursor: pointer;
`;

const Choice = styled.div`
    margin-top: 3px;
`;
const Sin = styled.div`
    margin-bottom: 13px;
`;
const Text = styled.div`
    width: 100%;
`;
