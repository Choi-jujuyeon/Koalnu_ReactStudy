import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReviews = (id) =>
    api.get(`/movie/${id}/reviews`, {
        params: { page: 1 },
    });

const useMovieReviews = (id) =>
    useQuery({
        queryKey: ["movie-reviews", id],
        queryFn: () => fetchMovieReviews(id),
        select: (data) => {
            console.log(data); // 여기서 API 응답을 확인해
            return data.data.results; // 실제로 results 배열이 있는지 체크
        },
    });

export default useMovieReviews;
