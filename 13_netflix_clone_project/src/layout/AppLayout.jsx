import React, { useState } from "react";
import "./AppLayout.style.js";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";

const AppLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <Container>
                <Logo>
                    <Link to="/">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/img/netLogo.png`}
                            alt="logo"
                        />
                    </Link>
                </Logo>
                <Container2>
                    <MenuToggle onClick={toggleMenu}>🔻메뉴</MenuToggle>

                    <MenuBar isOpen={menuOpen}>
                        <Link to="/">
                            <div>홈</div>
                        </Link>
                        <div>시리즈</div>
                        <Link to="/movies">
                            <div>영화</div>
                        </Link>
                        <div>NEW!요즘 대세 콘텐츠</div>
                        <div>내가 찜한 리스트</div>
                        <div>언어별로 찾아보기</div>
                    </MenuBar>

                    <RightContainer>
                        <SearchBar />

                        <img
                            src={`${process.env.PUBLIC_URL}/assets/icon/alarm.svg`}
                            alt="alarm"
                            width="40px"
                        />

                        <img
                            src={`${process.env.PUBLIC_URL}/assets/icon/profile.svg`}
                            alt="profile"
                            width="40spx"
                        />
                    </RightContainer>
                </Container2>
            </Container>
            <Outlet />
        </>
    );
};

export default AppLayout;
const Container = styled.div`
    height: 80px;
    background-color: #141414;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 60px;
    color: white;

    @media (max-width: 768px) {
        padding: 0 20px;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
    }
`;

const Container2 = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Logo = styled.div`
    height: 90%;
    margin-right: 20px;

    img {
        height: 100%;
        object-fit: contain;
        width: auto;
    }

    @media (max-width: 768px) {
        height: 60px; /* 로고 크기 줄이기 */
        margin-right: 10px;

        img {
            height: 100%;
        }
    }

    @media (max-width: 480px) {
        height: 50px;

        img {
            height: 100%;
        }
    }
`;

const MenuBar = styled.div`
    z-index: 99;
    gap: 30px;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #141414c9;
    padding: 20px;
    /* width: 30%; */

    a {
        text-decoration: none;
        color: inherit;
    }

    div {
        padding: 10px 0;

        border-bottom: ${({ isOpen }) =>
            isOpen ? "2px solid #a3a3a3c8" : "none"};
    }

    @media (min-width: 1401px) {
        display: flex;
        flex-direction: row;
        position: static;
        background: none;
        padding: 0;
    }
`;

const MenuToggle = styled.button`
    display: none;
    background: none;
    color: white;
    border: none;
    font-size: 20px;
    white-space: nowrap;
    cursor: pointer;

    @media (max-width: 1400px) {
        display: block;
    }
`;

const RightContainer = styled.div`
    gap: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
