import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import styled from "styled-components";

const App = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<HomePage />} />
                    <Route path="my-books" element={<MyPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
            </Routes>
        </Container>
    );
};

export default App;
const Container = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
    height: 100vh;
`;
