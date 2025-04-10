import React from "react";
import styled from "styled-components";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
const Header = ({ isLogin, isEmail, setIsLogin }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M HOME",
        "Sale",
        "지속가능성",
    ];
    const handleLogin = () => {
        if (isLogin === true) {
            setIsLogin(false);
            alert("로그아웃 되었습니다.");
        } else {
            navigate("/login");
        }
    };
    const search = (e) => {
        // console.log("keyPress");
        if (e.key === "Enter") {
            // console.log("we click this key", e.key);
            //입력한 검색어를 읽어와***
            let keyword = e.target.value;
            console.log("keyword: ", keyword);
            //url을 바꿔준다.(쿼리)***
            navigate(`/?q=${keyword}`);
        }
    };
    return (
        <Container>
            {location.pathname != "/login" && (
                <ButtonContainer onClick={handleLogin}>
                    <BButton>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/icons/user.svg`}
                            alt="login"
                        />
                        <div>
                            {isLogin ? `${isEmail} 님 환영합니다!` : "Login"}
                        </div>
                    </BButton>
                </ButtonContainer>
            )}
            <Link to="/">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                    alt="logo"
                    width="180px"
                />
            </Link>

            <MenuBar>
                <Menu>
                    <ul>
                        {menuList.map((menu) => (
                            <li>{menu}</li>
                        ))}
                    </ul>
                </Menu>
                <Search>
                    <InputWrapper>
                        <InputBox
                            type="text"
                            placeholder="Search for a product"
                            onKeyPress={(e) => search(e)}
                        />
                        <Underline />
                    </InputWrapper>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/search.svg`}
                        alt="search"
                        onClick={search}
                    />
                </Search>
            </MenuBar>
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
`;
const BButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
    border-radius: 25px;
    background-color: #fafafa;
    padding: 8px 18px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #e6f3fb;
        transform: translateY(-2px);
    }

    img {
        border-radius: 50%;
        background-color: #cfe9ff;
        padding: 6px;

        transition: background-color 0.3s ease;
    }

    div {
        font-size: 16px;
        font-weight: 600;
        color: #0077cc;
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* gap: 10px; */
    margin-top: 50px;
    margin-right: 0px;

    font-size: 18px;
    font-weight: 500;
    color: #0d99ff;
    /* background-color: red; */
`;

const MenuBar = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;

    @media (max-width: 1350px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Menu = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;

    ul {
        display: flex;
        flex-wrap: nowrap; // 줄바꿈 방지
        list-style-type: none;
        gap: 24px;
        margin: 0;
        padding: 0;
        white-space: nowrap; // 텍스트 줄바꿈 방지
    }

    @media (max-width: 1350px) {
        ul {
            overflow-x: auto;
            gap: 16px;
        }
    }
`;

const Search = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-right: 20px;

    font-size: 18px;
    font-weight: 500;
    color: #0d99ff;

    @media (max-width: 1350px) {
        display: none;
    }
    img {
        cursor: pointer;
    }
`;
const InputWrapper = styled.div`
    position: relative;
    width: 200px;
`;

const InputBox = styled.input`
    font-size: 16px;
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #ccc;
    color: #08aeea;
    width: 100%;
    background-color: transparent;
    transition: border-color 0.3s ease-in-out;

    &:focus {
        border-color: #08aeea;
        outline: none;
    }

    &:focus + span {
        transform: scaleX(1);
    }
`;

const Underline = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #08aeea;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
`;
