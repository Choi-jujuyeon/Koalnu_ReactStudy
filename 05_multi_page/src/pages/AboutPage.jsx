import React from "react";
import { useSearchParams } from "react-router-dom";
const AboutPage = () => {
    let [query, setQuery] = useSearchParams();
    // 쿼리의 특정 값을 가져올 수 있다
    console.log("ddd", query.get("q"));
    return <div>AboutPage</div>;
};

export default AboutPage;
