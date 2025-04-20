import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpComingMovies";
import MovieSlide from "../MovieSlide/MovieSlide";

const UpcomingMovieSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return alert(error.message);

    return <MovieSlide title="Upcoming Movies" data={data} />;
};

export default UpcomingMovieSlide;
