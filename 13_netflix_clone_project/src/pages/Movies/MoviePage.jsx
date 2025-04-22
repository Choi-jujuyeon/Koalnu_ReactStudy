import React from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import styled from "styled-components";

//경로 2가지
//1. nav바에서 클릭해서 온 경우-> popularMovie 보여주기
//2. keyword를 입력해서 온 경우-> keyword와 관련된 영화들을 보여준다.
const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const keyword = query.get("q");
    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
    });

    if (isLoading) {
        return <LoadingWrapper>Loading ...</LoadingWrapper>;
    }

    if (isError) {
        alert(error.message);
        return <ErrorWrapper>Error 발생</ErrorWrapper>;
    }

    return (
        <Container>
            <Title>MoviePage</Title>
            <FilterSection>
                <h2>필터가 보이는 부분</h2>
                {/* 여기에 필터 UI를 넣을 수 있습니다. */}
            </FilterSection>
            <MovieGrid>
                {data?.results.map((movie, index) => (
                    <MovieCardWrapper key={index}>
                        <MovieCard movie={movie} />
                    </MovieCardWrapper>
                ))}
            </MovieGrid>
        </Container>
    );
};

export default MoviePage;

// 스타일링 부분
const Container = styled.div`
    background-color: #141414;
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 20px;
`;

const FilterSection = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    color: #e50914;
    font-size: 1.2rem;
`;

const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    justify-items: center;
    padding: 0 10px;
`;

const MovieCardWrapper = styled.div`
    width: 100%;
    max-width: 250px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
    }
`;

const LoadingWrapper = styled.div`
    text-align: center;
    color: #fff;
    font-size: 2rem;
`;

const ErrorWrapper = styled.div`
    text-align: center;
    color: red;
    font-size: 2rem;
`;
