import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSearchParams } from "react-router-dom";
const ProductAllPage = () => {
    //UI에 보여주기 위해서는 -> useState 시용*
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);

    // 쿼리의 있는 글자를 읽어와야 할 때 -> useSearchParams() 사용*
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        // let url = "http://localhost:5000/products/";
        let searchQuery = query.get("q") || "";
        console.log("searchQuery: ", searchQuery);
        let url = `https://my-json-server.typicode.com/Choi-jujuyeon/TESTDATA/products?q=${searchQuery}`;
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
        setLoading(false);
    };

    // API 호출->useEffect 사용*
    useEffect(() => {
        //함수 호출
        getProducts();
    }, [query]);
    return (
        <>
            {loading ? (
                <LoadingSpinner loading={loading} />
            ) : (
                <Container>
                    {/* <h1>전체 상품 페이지</h1> */}
                    <Row>
                        {productList.map((menu) => (
                            <ProductCard item={menu} />
                        ))}
                    </Row>
                </Container>
            )}
        </>
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
    /* margin-left: 100px; */
    /* margin-right: 100px; */
    margin: 36px auto;
    width: 100%;
    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 0px;
        margin-right: 0px;
    }
`;
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4열로 고정 */
    gap: 13px;
    /* width: 100%; */
`;
