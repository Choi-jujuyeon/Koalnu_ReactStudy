import React from "react";
import { FilterSection } from "../MoviPageStyle";
const Filter = ({ selectedGenre, setSelectedGenre, setSortBy, sortBy }) => {
    return (
        <FilterSection>
            <label>
                장르:
                <select
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                >
                    <option value="">전체</option>
                    <option value="28">액션</option>
                    <option value="35">코미디</option>
                    <option value="18">드라마</option>
                    <option value="10749">로맨스</option>
                    {/* 추가 장르 */}
                </select>
            </label>

            <label>
                정렬:
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="popularity.desc">인기순</option>
                    <option value="vote_average.desc">평점순</option>
                    <option value="release_date.desc">최신순</option>
                </select>
            </label>
        </FilterSection>
    );
};

export default Filter;
