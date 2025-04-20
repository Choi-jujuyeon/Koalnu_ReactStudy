import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import MovieSlide from "../MovieSlide/MovieSlide";

const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return alert(error.message);

    return <MovieSlide title="Top Rated Movies" data={data} />;
};

export default TopRatedMovieSlide;
