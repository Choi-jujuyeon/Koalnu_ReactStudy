import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieVideos from "../../hooks/useMovieVideos";
import useMovieDetail from "../../hooks/useMovieDetail";
import Loading from "../../common/Loading/Loading";

import MovieHeader from "./components/movieHeader/MovieHeader";
import MovieTrailer from "./components/movieTrailer/MovieTrailer";
import ReviewButton from "./components/review/ReviewButton";
import Review from "./components/review/Review";

const MovieDetailPage = () => {
    const { id } = useParams();
    const { data: movie, isLoading, isError, error } = useMovieDetail(id);
    const { data: videoData } = useMovieVideos(id);

    const [show, setShow] = useState(false);
    const trailerRef = useRef(null);

    const trailer = videoData?.find(
        (item) => item.type === "Trailer" && item.site === "YouTube"
    );

    useEffect(() => {
        if (show && trailerRef.current) {
            trailerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [show]);

    if (isLoading) return <Loading />;
    if (isError) return <h1>Error: {error.message}</h1>;

    return (
        <Container>
            <MovieHeader movie={movie} />
            <Body>
                <ReviewButton onClick={() => setShow(true)} />
            </Body>
            {show && trailer && (
                <MovieTrailer
                    trailerKey={trailer.key}
                    trailerRef={trailerRef}
                />
            )}
            {show && <Review id={id} />}
        </Container>
    );
};

export default MovieDetailPage;
const Container = styled.div`
    background-color: #141414;
    color: white;
    min-height: 100vh;
    padding-bottom: 30px;
    /* height: 100vh; */
    font-family: "Segoe UI", sans-serif;
`;
const Body = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
`;
