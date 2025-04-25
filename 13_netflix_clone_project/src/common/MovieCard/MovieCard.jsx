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
    Placeholder,
} from "./MoviCard.style";

const MovieCard = ({ movie }) => {
    const { data: genreData } = useMovieGenreQuery();
    const navigate = useNavigate();

    const showGenre = (genreIdList) => {
        if (!genreData) return [];
        const genreNameList = genreIdList.map((id) => {
            const genreObject = genreData.find((genre) => genre.id === id);
            return genreObject ? genreObject.name : "기타";
        });
        return genreNameList;
    };

    const hasPoster = !!movie.poster_path;

    return (
        <CardWrapper onClick={() => navigate(`/movies/${movie.id}`)}>
            <Container backdrop={movie.poster_path}>
                {!hasPoster && (
                    <Placeholder>이미지 준비중 입니다 ..!ㅤ</Placeholder>
                )}
                <Overlay>
                    <InfoBox>
                        <Title>{movie.title}</Title>
                        <Genres>
                            {showGenre(movie.genre_ids).map((name) => (
                                <p key={name}>{name}</p>
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
