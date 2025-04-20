import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import styled from "styled-components";

const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }

    if (isError) {
        alert(error.message);
        return <h1>Error 발생</h1>; // 에러 상태도 UI로 명시적으로 반환해줘야 해
    }

    return (
        <div>
            {/* <h1>Banner</h1> */}
            <Container backdrop={data.results[0].poster_path}>
                <Overlay />
                <ContentBox>
                    <Title>{data?.results[0].title}</Title>
                    <Overview>{data?.results[0].overview}</Overview>
                </ContentBox>
            </Container>
        </div>
    );
};

export default Banner;

const Container = styled.div`
    position: relative;
    background-image: ${({ backdrop }) =>
        `url("https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${backdrop}")`};
    width: 100%;
    height: 80vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    color: white;
    font-family: "Helvetica Neue", sans-serif;
`;

const Overlay = styled.div`
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #141414, transparent);
    z-index: 1;
`;

const ContentBox = styled.div`
    /* background-color: red; */
    position: relative;
    z-index: 2;
    padding: 2rem;
    max-width: 700px;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
    line-height: 1.2;
`;

const Overview = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    color: #e0e0e0;
`;
