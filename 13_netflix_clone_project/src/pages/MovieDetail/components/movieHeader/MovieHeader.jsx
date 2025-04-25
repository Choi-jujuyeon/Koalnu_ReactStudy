import React from "react";
import {
    Header,
    Overlay,
    Poster,
    InfoSection,
    Title,
    Genres,
    Rating,
    ReleaseDate,
    Overview,
} from "../movieHeader/MovieHeader.style.js";

const MovieHeader = ({ movie }) => {
    return (
        <Header backdrop={movie.backdrop_path}>
            <Overlay />
            <Poster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <InfoSection>
                <Title>{movie.title}</Title>
                <Genres>{movie.genres?.map((g) => g.name).join(", ")}</Genres>
                <Rating>⭐ 평점: {movie.vote_average.toFixed(1)}</Rating>
                <ReleaseDate>개봉일: {movie.release_date}</ReleaseDate>
                <Overview>{movie.overview}</Overview>
            </InfoSection>
        </Header>
    );
};

export default MovieHeader;
