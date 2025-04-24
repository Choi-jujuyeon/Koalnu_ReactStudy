import { useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Userpage from "./Userpage";

const Main = ({ setAuthenticate }) => {
    const navigate = useNavigate();
    const clickAboutPage = () => {
        navigate("/product");
    };

    return (
        <div>
            <h1>1. 여러개 페이지 만들기</h1>
            <p>npm i react-router-dom@6 </p>

            <h1>2. Product Page 링크하기</h1>
            <button onClick={clickAboutPage}>product 링크하기</button>
            <h1>3. url 뒤에 detail 페이지 파라미터 값 읽어오기</h1>
            <h1>4. 메인 url 뒤 쿼리 값 가져오기</h1>

            <h1>5. 리다리엑트 하는 방법</h1>

            <Link to="/user">
                <button onClick={() => setAuthenticate(false)}>
                    외부인이다!
                </button>
            </Link>
            <Link to="/user">
                <button onClick={() => setAuthenticate(true)}>
                    내부인이다!
                </button>
            </Link>
        </div>
    );
};

export default Main;
