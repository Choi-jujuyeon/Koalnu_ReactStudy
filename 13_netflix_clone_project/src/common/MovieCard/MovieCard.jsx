import { useMovieGenreQuery } from "../../hooks/useMovieGenreQuery";
import { useNavigate } from "react-router-dom";
import {
    CardWrapper,
    Container,
    Overlay,
    InfoBox,
    Title,
    Genres,
    ExtraInfo,
} from "./MoviCard.style";

const MovieCard = ({ movie }) => {
    const { data: genreData } = useMovieGenreQuery();
    // console.log("genre", genreData);
    const navigate = useNavigate();

    const showGenre = (genreIdList) => {
        if (!genreData) return [];
        const genreNameList = genreIdList.map((id) => {
            const genreObject = genreData.find((genre) => genre.id === id);
            return genreObject.name;
        });

        return genreNameList;
    };
    return (
        <CardWrapper onClick={() => navigate(`/movies/${movie.id}`)}>
            <Container backdrop={movie.poster_path}>
                <Overlay>
                    <InfoBox>
                        <Title>{movie.title}</Title>
                        <Genres>
                            {showGenre(movie.genre_ids).map((id) => (
                                <p key={id}>{id}</p>
                            ))}
                        </Genres>
                        <ExtraInfo>
                            <p>⭐ {movie.vote_average}</p>
                            <p>🔥 {movie.popularity}</p>
                            <p>{movie.adult ? "🔞 성인" : "👶 전체이용가"}</p>
                        </ExtraInfo>
                    </InfoBox>
                </Overlay>
            </Container>
        </CardWrapper>
    );
};

export default MovieCard;
