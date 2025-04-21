// components/Movie/Slide/MovieSlide.js
import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlide = ({ title, data, responsive }) => {
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
