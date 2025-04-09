import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductAllPage from "./pages/ProductAllPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useState } from "react";
/*
00. 전체 상품페이지, 로그인, 상품상세 페이지
00-1. navigation 바 생성하기
01. 전체 상품페이지: 전체 상품 볼 수 있음
02. 로그인 버튼을 누르면 로그인 페이지가 나온다.
03. 상품디테일 페이지를 눌렀으나, 로그인이 안되어 있을 경우 로그인 페이지 먼저!
04. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다. 
05. 로그인 아웃 버튼을 클릭하면 -> 로그아웃
06. 로그아웃이 되면 -> 상품 디테일 페이지 접근 안됌, 로그인 페이지로 리다이렉트
07. 로그인/로그아웃 상태변화 버튼에 표시해주기
08. 상품을 검색할 수 있다

*/
const App = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Routes>
            <Route path="/" element={<Header isLogin={isLogin} />}>
                <Route index element={<ProductAllPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="product/:id" element={<ProductDetailPage />} />
            </Route>
        </Routes>
    );
};

export default App;
