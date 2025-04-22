import { useState, useEffect } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";
import Loading from "../../common/Loading/Loading";

const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const keyword = query.get("q");
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
        page: currentPage,
    });

    useEffect(() => {
        setCurrentPage(1); // 검색어 바뀌면 페이지 초기화
    }, [keyword]);
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected + 1);
        console.log("page", selected + 1);
    };
    useEffect(() => {
        // 검색 결과가 없을 경우 URL에서 q 파라미터 제거
        if (data?.results.length === 0 && keyword) {
            alert("죄송합니다. 검색하신 결과를 찾을 수 없어요.");
            setQuery({}); // URL에서 q 파라미터 제거하여 인기 영화 목록으로 돌아감
        }
    }, [data, keyword, setQuery]);

    if (isLoading) {
        return (
            <LoadingWrapper>
                <Loading />
            </LoadingWrapper>
        );
    }

    if (isError) {
        alert(error.message);
        return <ErrorWrapper>Error 발생</ErrorWrapper>;
    }
    const noResult = data?.results.length === 0;
    const realTotalPages = data?.total_pages
        ? Math.min(data.total_pages, 500)
        : 1;
    return (
        <Container>
            <FilterSection>
                <h2>필터가 보이는 부분</h2>
            </FilterSection>
            {noResult ? (
                <ErrorWrapper>검색 결과가 없습니다.</ErrorWrapper>
            ) : (
                <MovieGrid>
                    {data?.results.map((movie) => (
                        <MovieCardWrapper key={movie.id}>
                            <MovieCard movie={movie} />
                        </MovieCardWrapper>
                    ))}
                </MovieGrid>
            )}
            <PaginationContainer>
                <ReactPaginate
                    pageCount={realTotalPages}
                    marginPagesDisplayed={1} // 앞뒤에 최소 1페이지만 보여줌
                    key={keyword} // 검색어 바뀔 때 페이지네이션 초기화 확실히
                    breakLabel="..."
                    nextLabel=" >>"
                    previousLabel="<< "
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    // pageCount={data?.total_pages}
                    pageLinkClassName="page-item"
                    activeClassName="active"
                    containerClassName="pagination"
                    forcePage={currentPage - 1}
                />
            </PaginationContainer>
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
    height: 100vh;
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
`;
