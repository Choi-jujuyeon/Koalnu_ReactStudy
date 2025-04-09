import React from "react";
import styled from "styled-components";

const LoginPage = ({ setIsLogin }) => {
    const loginUser = (event) => {
        //onSubmit의 새로고침(렌더)를 막아줘야 한다
        event.preventDefault();
        console.log("login user function issu");
        setIsLogin(true);
    };
    return (
        <Form action="" onSubmit={(event) => loginUser(event)}>
            <Title>Login</Title>
            <InputField>
                <Input type="text" required />
                <Label>Enter Email</Label>
            </InputField>
            <InputField>
                <Input type="password" required />
                <Label>Enter Password</Label>
            </InputField>
            <ForgotPassword>Forgot your password?</ForgotPassword>
            {/*type이 submit으로 되어있으면, onClick으로 이벤트 주면 안된다!*/}
            <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>
    );
};

export default LoginPage;

const Form = styled.form`
    margin: 20px;
    background-color: #ffffff;
    /* box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2); */
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 25px;
    border-radius: 30px;
    z-index: 99;
`;

const Title = styled.p`
    font-size: 28px;
    font-weight: 800;
    color: #5e040f;
`;

const InputField = styled.div`
    position: relative;
    width: 100%;
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
        padding-left: 5px;
        padding-right: 5px;
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
    background: #5e040f;
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
