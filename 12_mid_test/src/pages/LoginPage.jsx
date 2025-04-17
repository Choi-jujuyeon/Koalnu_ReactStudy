import React, { useState } from "react";
import styled from "styled-components";
import loginStore from "../stores/loginStore";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위해 useNavigate 훅을 사용

const LoginPage = () => {
    const { login } = loginStore(); // zustand의 login 함수
    const [isEmail, setIsEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

    const loginUser = async (event) => {
        event.preventDefault();
        login(isEmail);
        navigate("/");
    };

    return (
        <Wrapper>
            <Form onSubmit={loginUser}>
                <Title>환영합니다</Title>
                <InputField>
                    <Input
                        type="text"
                        value={isEmail}
                        onChange={(e) => setIsEmail(e.target.value)}
                        required
                    />
                    <Label>이메일 주소</Label>
                </InputField>
                <InputField>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Label>비밀번호</Label>
                </InputField>
                <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
                <SubmitButton type="submit">로그인</SubmitButton>
                <div> 계정이 없으신가요? 회원가입</div>
            </Form>
        </Wrapper>
    );
};

export default LoginPage;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f8f8;
`;

const Form = styled.form`
    background-color: #ffffff;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 25px;
    border-radius: 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    z-index: 99;

    @media (max-width: 600px) {
        width: 90%;
        padding: 15px;
    }
`;

const Title = styled.p`
    font-size: 28px;
    font-weight: 800;
    color: #1f423d;
    text-align: center;
`;

const InputField = styled.div`
    position: relative;
    width: 95%;

    @media (max-width: 600px) {
        width: 95%;
    }
`;

const Input = styled.input`
    margin-top: 15px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    height: 45px;
    border: 1.5px solid #ecedec;
    background: transparent;
    padding-left: 10px;

    &:focus {
        border: 1.5px solid #cc071e;
    }

    &:focus ~ label,
    &:valid ~ label {
        top: 5px;
        left: 5px;
        font-size: 12px;
        color: #cc071e;
        background-color: #ffffff;
        padding: 0 5px;
    }
`;

const Label = styled.label`
    position: absolute;
    top: 25px;
    left: 15px;
    color: #ccc;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 2;
`;

const ForgotPassword = styled.a`
    color: #cc071e;
    cursor: pointer;
    font-size: 14px;
`;

const SubmitButton = styled.button`
    margin-top: 30px;
    height: 55px;
    background: #1f423d;
    border-radius: 11px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #000000;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #0000003a;
    }
`;
