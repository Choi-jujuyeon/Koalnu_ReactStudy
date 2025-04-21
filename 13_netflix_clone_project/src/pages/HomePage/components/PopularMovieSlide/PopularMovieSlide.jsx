import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";
import { responsive } from "../../../../constants/responsive";

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return alert(error.message);

    return (
        <MovieSlide
            title="Popular Movies"
            data={data}
            responsive={responsive}
        />
    );
};

export default PopularMovieSlide;
