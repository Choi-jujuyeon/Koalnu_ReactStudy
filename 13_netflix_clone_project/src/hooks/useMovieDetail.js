import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = (id) => api.get(`/movie/${id}`);

const useMovieDetail = (id) => {
    return useQuery({
        queryKey: ["movie-detail", id],
        queryFn: () => fetchMovieDetail(id),
        select: (data) => data.data,
    });
};

export default useMovieDetail;
