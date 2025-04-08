import React from "react";
import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
    const navigate = useNavigate();
    const goAboutPage = () => {
        //쿼리 뒤에 있는 값은 url에 영향을 끼치지 않는다
        navigate("/about?q=pants");
    };
    return (
        <div>
            <h1>HomePage</h1>
            <Link to="/contact">Go to contact page</Link>
            <button onClick={goAboutPage}>go to About page</button>
        </div>
    );
};

export default HomePage;
