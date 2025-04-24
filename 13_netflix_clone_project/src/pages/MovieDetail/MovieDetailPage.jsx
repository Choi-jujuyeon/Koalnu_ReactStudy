import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieVideos from "../../hooks/useMovieVideos";
import useMovieDetail from "../../hooks/useMovieDetail";
import styled from "styled-components";
import Loading from "../../common/Loading/Loading";

const MovieDetailPage = () => {
    const { id } = useParams();
    const { data: movie, isLoading, isError, error } = useMovieDetail(id);
    const { data: videoData } = useMovieVideos(id);

    const [show, setshow] = useState(false);
    const trailerRef = useRef(null);

    const prevideo = videoData?.find(
        (item) => item.type === "Trailer" && item.site === "YouTube"
    );

    const showVideo = () => {
        setshow(true);
    };

    useEffect(() => {
        if (show && trailerRef.current) {
            trailerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [show]);

    if (isLoading) return <Loading />;
    if (isError) return <h1>Error: {error.message}</h1>;

    return (
        <Container>
            <Header backdrop={movie.backdrop_path}>
                <Overlay />
                <Poster
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <InfoSection>
                    <Title>{movie.title}</Title>
                    <Genres>
                        {movie.genres?.map((g) => g.name).join(", ")}
                    </Genres>
                    <Rating>⭐ 평점: {movie.vote_average.toFixed(1)}</Rating>
                    <ReleaseDate>개봉일: {movie.release_date}</ReleaseDate>
                    <Overview>{movie.overview}</Overview>
                </InfoSection>
            </Header>

            <Body>
                <Text onClick={showVideo}>REVIEW🔻</Text>
            </Body>

            {show && prevideo && (
                <TrailerWrapper ref={trailerRef}>
                    <ResponsiveIframe
                        src={`https://www.youtube.com/embed/${prevideo.key}?autoplay=1`}
                        title="Movie Preview"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </TrailerWrapper>
            )}
        </Container>
    );
};

export default MovieDetailPage;
const Container = styled.div`
    background-color: #141414;
    color: white;
    min-height: 100vh;
    font-family: "Segoe UI", sans-serif;
`;

const Header = styled.div`
    position: relative;
    background-image: ${({ backdrop }) =>
        `url("https://media.themoviedb.org/t/p/w1280${backdrop}")`};
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
    color: #b0b0b0;

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

const Body = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
`;

const Text = styled.div`
    font-size: 50px;
    font-weight: bold;
    z-index: 99;
    cursor: pointer;
    color: #e50914;
    animation: blink 1.5s infinite;
    transition: transform 0.1s;

    &:hover {
        transform: scale(1.5);
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.3;
        }
    }

    @media (max-width: 768px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 30px;
    }
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
