import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieSlide from "../MovieSlide/MovieSlide";

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return alert(error.message);

    return <MovieSlide title="Popular Movies" data={data} />;
};

export default PopularMovieSlide;
