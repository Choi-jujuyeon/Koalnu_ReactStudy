import styled from "styled-components";

const Body = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
`;

const TrailerWrapper = styled.div`
    margin-top: 3rem;
    padding: 1rem;
    text-align: center;

    h2 {
        margin-bottom: 1rem;
    }
`;

const ResponsiveIframe = styled.iframe`
    width: 80%;
    height: 450px;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        width: 90%;
        height: 300px;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 200px;
    }
`;
export { Body, TrailerWrapper, ResponsiveIframe };
