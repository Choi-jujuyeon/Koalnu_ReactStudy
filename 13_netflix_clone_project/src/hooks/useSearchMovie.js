import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page, sortBy, genre }) => {
    if (keyword) {
        // 검색 중이면 기존 Search API
        return api.get("/search/movie", {
            params: { query: keyword, page },
        });
    } else {
        // 키워드 없을 땐 Discover API 에 장르/정렬 파라미터 추가
        return api.get("/discover/movie", {
            params: {
                sort_by: sortBy,
                with_genres: genre,
                page,
            },
        });
    }
};

export const useSearchMovieQuery = ({ keyword, page, sortBy, genre }) => {
    return useQuery({
        queryKey: ["movie-search", keyword, page, sortBy, genre],
        queryFn: () => fetchSearchMovie({ keyword, page, sortBy, genre }),
        select: (res) => res.data,
    });
};
