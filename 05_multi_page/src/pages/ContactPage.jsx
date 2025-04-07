import React from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    };
    return (
        <div>
            ContactPage
            <button onClick={goToHome}>UseNavigate 활용해서 이동하기</button>
        </div>
    );
};

export default ContactPage;
