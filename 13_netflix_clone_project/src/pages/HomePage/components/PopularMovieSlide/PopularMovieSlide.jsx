import React from "react";
import styled from "styled-components";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }
    if (isError) {
        return alert(error.message);
    }
    return (
        <div>
            <Subtitle>Popular Movies</Subtitle>
            <Carousel infinite={true} centerMode={true} responsive={responsive}>
                {data.results.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
        </div>
    );
};

export default PopularMovieSlide;
const Subtitle = styled.div`
    font-family: "Helvetica Neue", sans-serif;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1rem;
    line-height: 1.2;
    padding: 2rem;
`;
