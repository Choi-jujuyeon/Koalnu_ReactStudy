import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";
import { responsive } from "../../../../constants/responsice";

const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return alert(error.message);

    return (
        <MovieSlide
            title="Top Rated Movies"
            data={data}
            responsive={responsive}
        />
    );
};

export default TopRatedMovieSlide;
