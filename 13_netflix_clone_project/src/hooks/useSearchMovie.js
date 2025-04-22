import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const fetchSearchMovie = ({ keyword, page }) => {
    //상황에 따라 2가지의 다른 ui를 호출을 해줘야 한다!
    return keyword
        ? api.get(`/search/movie?query=${keyword}&page=${page}`)
        : api.get(`/movie/popular?page=${page}`);
};
export const useSearchMovieQuery = ({ keyword, page }) => {
    return useQuery({
        queryKey: [`movie-search`, keyword, page],
        queryFn: () => fetchSearchMovie({ keyword, page }),
        select: (result) => result.data,
    });
};
