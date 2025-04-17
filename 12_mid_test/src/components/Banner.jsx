import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import loginStore from "../stores/loginStore";

const Banner = () => {
    const { isLogin, email } = loginStore(); // 상태를 호출할 때 ()를 추가
    return (
        <Container>
            <div>
                <h1>코딩 알려주는 누나 도서관</h1>
                <div>
                    {isLogin ? (
                        <h1>{email}님 환영합니다!</h1> // 로그인 상태에 따라 이메일 출력
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <SearchBar />
        </Container>
    );
};

export default Banner;

const Container = styled.div`
    background-color: #1b3b36;
    height: 200px;
    color: #e6c88c;
    padding-left: 150px;
    padding-right: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    div {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
`;
