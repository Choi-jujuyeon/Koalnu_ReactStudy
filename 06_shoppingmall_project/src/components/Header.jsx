import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Header = () => {
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

    return (
        <Container>
            <ButtonContainer>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/user.svg`}
                    alt="login"
                />
                <div> Login</div>
            </ButtonContainer>

            <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                alt="logo"
                width="180px"
            />

            <MenuBar>
                <Menu>
                    <ul>
                        {menuList.map((menu) => (
                            <li>{menu}</li>
                        ))}
                    </ul>
                </Menu>
                <Search>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/search.svg`}
                        alt="search"
                        // width="20px"
                    />
                    <div>search</div>
                </Search>
            </MenuBar>
            <Outlet />
        </Container>
    );
};

export default Header;

const Container = styled.div`
    background-color: #e4ebff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    background-color: #ffdfdf;
    gap: 8px;
    margin-top: 50px;

    font-size: 18px;
    font-weight: 500;
    color: #0d99ff;
`;

const MenuBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    background-color: royalblue;
    /* overflow-x: auto; */
`;
const Menu = styled.div`
    margin: 0 auto;
    /* position: absolute; */
    ul {
        display: flex;
        list-style-type: none;
        gap: 24px;

        flex-wrap: nowrap;
        white-space: nowrap;
    }
    overflow: hidden;
`;
const Search = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;
    margin-right: 0px;
    /* right: 0px; */
    background-color: red;

    font-size: 18px;
    font-weight: 500;
    color: #0d99ff;
`;
