import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpComingMovies";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";
import { responsive } from "../../../../constants/responsive";

const UpcomingMovieSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return alert(error.message);

    return (
        <MovieSlide
            title="Upcoming Movies"
            data={data}
            responsive={responsive}
        />
    );
};

export default UpcomingMovieSlide;
