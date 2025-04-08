import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
const ProductAllPage = () => {
    //UI에 보여주기 위해서는 -> useState 시용*
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        // let url = "http://localhost:5000/products/";

        let url =
            "https://my-json-server.typicode.com/Choi-jujuyeon/TESTDATA/products";
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    };

    // API 호출->useEffect 사용*
    useEffect(() => {
        //함수 호출
        getProducts();
    }, []);
    return (
        <Container>
            <h1>전체 상품 페이지</h1>
            <Row>
                {productList.map((menu) => (
                    <ProductCard item={menu} />
                ))}
                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
            </Row>
        </Container>
    );
};

export default ProductAllPage;

const Container = styled.div`
    /* background-color: #6fd1ff; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    margin-left: 100px;
    margin-right: 100px;
    width: 100%;
`;
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4열로 고정 */
    gap: 8px;
    /* width: 100%; */
`;
