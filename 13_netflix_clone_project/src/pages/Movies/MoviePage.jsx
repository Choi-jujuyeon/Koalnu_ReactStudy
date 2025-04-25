import React, { useState, useEffect } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Loading from "../../common/Loading/Loading";
import {
    Container,
    FilterSection,
    MovieGrid,
    MovieCardWrapper,
    LoadingWrapper,
    ErrorWrapper,
    PaginationContainer,
} from "./MoviPageStyle"; // 파일명 오타 주의!
import "./MoviePage.style.css";
import Filter from "./components/Filter";

const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const keyword = query.get("q");

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [sortBy, setSortBy] = useState("popularity.desc");

    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
        page: currentPage,
        sortBy,
        genre: selectedGenre,
    });

    // 검색어·장르·정렬 바뀌면 페이지 초기화
    useEffect(() => {
        setCurrentPage(1);
    }, [keyword, selectedGenre, sortBy]);

    // 페이지네이션 클릭
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    // 검색 결과 0건 시 q 제거
    useEffect(() => {
        if (data?.results?.length === 0 && keyword) {
            alert("죄송합니다. 검색하신 결과를 찾을 수 없어요.");
            setQuery({});
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

    const noResult = data.results.length === 0;
    const realTotalPages = data.total_pages
        ? Math.min(data.total_pages, 500)
        : 1;

    return (
        <Container>
            <Filter
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
                setSortBy={setSortBy}
                sortBy={sortBy}
            />

            {noResult ? (
                <ErrorWrapper>검색 결과가 없습니다.</ErrorWrapper>
            ) : (
                <MovieGrid>
                    {data.results.map((movie) => (
                        <MovieCardWrapper key={movie.id}>
                            <MovieCard movie={movie} />
                        </MovieCardWrapper>
                    ))}
                </MovieGrid>
            )}

            <PaginationContainer>
                <ReactPaginate
                    pageCount={realTotalPages}
                    marginPagesDisplayed={1}
                    breakLabel="..."
                    nextLabel=">>"
                    previousLabel="<<"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
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
