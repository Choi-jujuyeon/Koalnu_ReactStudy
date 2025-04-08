import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
const ProductAllPage = () => {
    //UI에 보여주기 위해서는 -> useState 시용*
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        let url = "http://localhost:5000/products/";
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
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
            <ProductCard />
        </Container>
    );
};

export default ProductAllPage;

const Container = styled.div``;
