import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useSearchMovieQuery = ({ keyword }) => {
    const fetchSearchMovie = ({ keyword }) => {
        //상황에 따라 2가지의 다른 ui를 호출을 해줘야 한다!
        return keyword
            ? api.get(`/search/movie?query=${keyword}`)
            : api.get(`/movie/popular`);
    };
    return useQuery({
        queryKey: [`movie-search`, keyword],
        queryFn: () => fetchSearchMovie({ keyword }),
        select: (result) => result.data,
    });
};
