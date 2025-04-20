import styled from "styled-components";
const MovieCard = ({ movie }) => {
    return (
        <CardWrapper>
            <Container backdrop={movie.poster_path}>
                <Overlay>
                    <InfoBox>
                        <Title>{movie.title}</Title>
                        <Genres>
                            {movie.genre_ids.map((id) => (
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
const CardWrapper = styled.div`
    position: relative;
    margin-top: 30px;
    /* background-color: #ff8888; */
    /* width: 100%; */

    &:hover {
        z-index: 90; // 카드 전체가 위로 오도록
    }
`;
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to top,
        rgba(20, 20, 20, 0.9),
        rgba(0, 0, 0, 0.3)
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;
    box-sizing: border-box;
    color: white;
`;

const Container = styled.div`
    position: relative;
    background-image: ${({ backdrop }) =>
        `url("https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${backdrop}")`};
    width: 220px;
    height: 330px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.4s ease-in-out;
    transform-origin: center;

    &:hover {
        transform: scale(1) translateY(-30px); // scale 확대 + 위로 이동
        z-index: 99999;
    }

    &:hover ${Overlay} {
        opacity: 1;
    }

    @media (max-width: 1600px) {
        width: 200px;
        height: 300px;
    }
    @media (max-width: 1024px) {
        width: 180px;
        height: 270px;
    }

    @media (max-width: 768px) {
        width: 150px;
        height: 225px;
    }

    @media (max-width: 464px) {
        width: 120px;
        height: 180px;
    }
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.div`
    font-size: 1.1rem;
    font-weight: bold;
    text-shadow: 1px 1px 3px black;
`;

const Genres = styled.div`
    font-size: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    p {
        margin: 0;
        padding: 2px 6px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
    }
`;

const ExtraInfo = styled.div`
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
    opacity: 0.8;
`;
