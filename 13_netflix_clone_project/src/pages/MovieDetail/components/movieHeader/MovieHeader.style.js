import styled from "styled-components";
const Header = styled.div`
    position: relative;
    background-image: ${({ backdrop }) =>
        `url(https://media.themoviedb.org/t/p/w1280${backdrop})`};
    background-size: cover;
    background-position: center;
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 150px;

    @media (max-width: 1024px) {
        flex-direction: column;
        height: auto;
        gap: 2rem;
        padding: 2rem 1rem;
    }

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;
const Container = styled.div`
    background-color: #141414;
    color: white;
    min-height: 100vh;
    font-family: "Segoe UI", sans-serif;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        #141414 0%,
        rgba(20, 20, 20, 0.5) 25%,
        rgba(20, 20, 20, 0.8) 90%,
        #141414 100%
    );
    z-index: 0;
`;

const Poster = styled.img`
    width: 400px;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        width: 250px;
    }

    @media (max-width: 480px) {
        width: 180px;
    }
`;

const InfoSection = styled.div`
    margin-top: 2rem;
    max-width: 800px;
    z-index: 1;
    position: relative;
    text-align: start;

    @media (max-width: 1024px) {
        text-align: center;
    }

    @media (max-width: 480px) {
        margin-top: 1rem;
        padding: 0 1rem;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin: 1rem 0 0.5rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.6rem;
    }
`;

const Genres = styled.p`
    font-size: 1rem;
    color: #f9ffc5;

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const Rating = styled.p`
    margin-top: 0.5rem;
    font-size: 1.1rem;
    color: #1db954;

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const ReleaseDate = styled.p`
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #ccc;

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const Overview = styled.p`
    margin-top: 1.5rem;
    font-size: 1rem;
    line-height: 1.6;

    @media (max-width: 480px) {
        font-size: 0.95rem;
    }
`;

export {
    Container,
    Header,
    Overlay,
    Poster,
    InfoSection,
    Title,
    Genres,
    Rating,
    ReleaseDate,
    Overview,
};
