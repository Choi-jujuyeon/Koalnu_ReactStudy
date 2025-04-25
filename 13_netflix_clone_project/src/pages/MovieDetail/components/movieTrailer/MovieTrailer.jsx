import React from "react";
import { ResponsiveIframe, TrailerWrapper } from "./MovieTrailer.style";

const MovieTrailer = ({ trailerKey, trailerRef }) => {
    return (
        <TrailerWrapper ref={trailerRef}>
            <ResponsiveIframe
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                title="Movie Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </TrailerWrapper>
    );
};

export default MovieTrailer;
