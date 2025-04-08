import React from "react";
import styled from "styled-components";

const ProductCard = () => {
    return (
        <Container>
            <img
                src="https://image.hm.com/assets/hm/60/36/603613cff9fcd9b4f5aefb0dc3a7cb861b56f58b.jpg?imwidth=657"
                alt=""
                // width="50%"
            />

            <div>Conscious choice</div>
            <div>벨티드 크윌 코트</div>
            <div>가격</div>
            <div>신상품</div>
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
