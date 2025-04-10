import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
const LoginButtons = ({ isLogin, isEmail, handleLogin }) => {
    const location = useLocation();

    return (
        <>
            {location.pathname != "/login" && (
                <ButtonContainer onClick={handleLogin}>
                    <BButton>
                        {isLogin ? (
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/icons/logOut.svg`}
                                alt="login"
                            />
                        ) : (
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/icons/user.svg`}
                                alt="login"
                            />
                        )}

                        <div>
                            {isLogin ? `${isEmail} 님 환영합니다!` : "Login"}
                        </div>
                    </BButton>
                </ButtonContainer>
            )}
        </>
    );
};

export default LoginButtons;
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
const BButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
    border-radius: 25px;
    background-color: #ffffff; // 연한 핑크 계열
    padding: 8px 18px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #e7dddd;
        transform: translateY(-2px);
    }

    img {
        border-radius: 50%;
        background-color: #e2d8d9;
        padding: 6px;
        transition: background-color 0.3s ease;
    }

    div {
        font-size: 16px;
        font-weight: 600;
        color: #5e040f;
        @media (max-width: 600px) {
            display: none;
        }
    }
    @media (max-width: 600px) {
        padding: 6px 10px;
        gap: 6px;
    }
`;
