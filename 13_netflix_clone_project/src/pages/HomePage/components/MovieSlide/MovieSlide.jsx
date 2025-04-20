// components/Movie/Slide/MovieSlide.js
import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1600 }, items: 6 },
    largeScreen: { breakpoint: { max: 1600, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const MovieSlide = ({ title, data }) => {
    return (
        <Container>
            <Subtitle>{title}</Subtitle>
            <Carousel infinite centerMode responsive={responsive}>
                {data?.results.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </Carousel>
        </Container>
    );
};

export default MovieSlide;

const Container = styled.div`
    background-color: #141414;
    padding-bottom: 100px;
`;
const Subtitle = styled.div`
    font-family: "Helvetica Neue", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding: 2rem;
    color: white;
`;
