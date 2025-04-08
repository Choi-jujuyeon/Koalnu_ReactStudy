import React, { useEffect } from "react";

const ProductAllPage = () => {
    const getProducts = async () => {
        let url = "http://localhost:5000/products/";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    };

    // API 호출->useEffect 사용*
    useEffect(() => {
        //함수 호출
        getProducts();
    }, []);
    return (
        <div>
            <h1>전체 상품 페이지</h1>
        </div>
    );
};

export default ProductAllPage;
