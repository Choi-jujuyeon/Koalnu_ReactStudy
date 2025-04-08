import React from "react";
import styled from "styled-components";

const ProductCard = ({ item }) => {
    return (
        <Container>
            <img src={item?.img} alt="" />

            {/* <div>{item?.}</div> */}
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.new == true ? "신상품" : ""}</div>
        </Container>
    );
};

export default ProductCard;

const Container = styled.div`
    /* width: 25%; */
    img {
        width: 100%;
        height: auto;
    }
`;
