import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Menu = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

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
        <MenuBar>
            <MMenu>
                <ul>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
            </MMenu>
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
            <div>
                {show && (
                    <Category>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/icons/del.svg`}
                            alt="close"
                            onClick={() => setShow(false)}
                            width="40px"
                        />
                        {menuList.map((menu, idx) => (
                            <li key={idx}>{menu}</li>
                        ))}
                    </Category>
                )}

                {!show && (
                    <Category>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/icons/spreadMenu.svg`}
                            alt="spread"
                            onClick={() => setShow(true)}
                            width="30px"
                        />
                    </Category>
                )}
            </div>
        </MenuBar>
    );
};

export default Menu;
const Category = styled.div`
    display: none;

    @media (max-width: 599px) {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 999999;
        /* padding: 16px 0; */
        /* margin-bottom: 100px; */
        /* background-color: red; */

        li {
            padding: 12px 20px;
            border-bottom: 1px solid #eee;
            font-size: 16px;
            font-weight: 500;
            color: #333;

            &:hover {
                background-color: #f7f7f7;
            }
        }

        img {
            align-self: flex-end;
            margin-right: 16px;
            margin-bottom: 8px;
        }
    }
`;

const MMenu = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;

    @media (max-width: 599px) {
        display: none;
    }

    ul {
        display: flex;
        flex-wrap: nowrap;
        list-style-type: none;
        gap: 24px;
        margin: 0;
        padding: 0;
        white-space: nowrap;
    }

    @media (max-width: 1350px) {
        ul {
            overflow-x: auto;
            gap: 16px;
        }
    }
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

const Search = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-right: 20px;

    font-size: 18px;
    font-weight: 500;
    color: #5e040f;

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
    color: #860817;
    width: 100%;
    background-color: transparent;
    transition: border-color 0.3s ease-in-out;

    &:focus {
        border-color: #860817;
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
    background-color: #860817;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
`;
