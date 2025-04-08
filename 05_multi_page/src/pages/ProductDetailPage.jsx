import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
    const { id } = useParams();
    //const params = useParams();
    //console.log("ppp", params);
    return <h1>ProductDetailPage{id}</h1>;
};

export default ProductDetailPage;
