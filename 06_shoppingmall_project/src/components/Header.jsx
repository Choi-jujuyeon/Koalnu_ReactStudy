import React from "react";
import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginButtons from "./LoginButtons";
import Menu from "./Menu";
const Header = ({ isLogin, isEmail, setIsLogin }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        if (isLogin === true) {
            setIsLogin(false);
            alert("로그아웃 되었습니다.");
        } else {
            navigate("/login");
        }
    };

    return (
        <Container>
            <LoginButtons
                isLogin={isLogin}
                isEmail={isEmail}
                handleLogin={handleLogin}
            />

            <Link to="/">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                    alt="logo"
                    width="180px"
                />
            </Link>
            <Menu />

            <Outlet />
        </Container>
    );
};

export default Header;

const Container = styled.div`
    /* background-color: #e4ebff; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
    margin-left: 100px;
    margin-right: 100px;
    gap: 18px;
    img {
        padding: 10px;
    }
    @media (max-width: 600px) {
        margin: 0 16px;
        gap: 12px;
    }
`;
