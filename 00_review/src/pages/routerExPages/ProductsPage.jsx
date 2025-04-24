import React from "react";
import { Link, useSearchParams } from "react-router-dom";
const ProductsPage = () => {
    let [query, setQuery] = useSearchParams();
    console.log(query.get("q"));
    return (
        <div>
            <h1>ProductsPage</h1>
            <Link to="product/1">
                <button>디테일 페이지로 가자</button>
            </Link>
        </div>
    );
};

export default ProductsPage;
