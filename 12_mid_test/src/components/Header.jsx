import React from "react";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import styled from "styled-components";
import { Link } from "react-router-dom";
import loginStore from "../stores/loginStore";
const Header = () => {
    const { isLogin, logout } = loginStore();
    return (
        <div>
            <Container>
                <Link to="/">
                    <h3>코딩 알려주는 누나 도서관</h3>
                </Link>
                <ButtonContainer>
                    <Link to="/">
                        <div>메인</div>
                    </Link>
                    <Link to="/my-page">
                        <div>나의 책</div>
                    </Link>
                    {isLogin ? (
                        <Link to="/" onClick={logout}>
                            <LogoutText>로그아웃</LogoutText>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <LoginText>로그인</LoginText>
                        </Link>
                    )}
                </ButtonContainer>
            </Container>
            <LoadingSpinner />
            <Outlet />
        </div>
    );
};

export default Header;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 150px;
    margin-right: 150px;
    a {
        text-decoration: none;
        color: inherit;
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    gap: 30px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: inherit;
    }
`;
const LoginText = styled.div`
    color: #e6c88c;
`;
const LogoutText = styled.div`
    color: #cc071e;
`;
