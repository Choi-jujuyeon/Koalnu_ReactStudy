// src/hooks/useMovieVideos.js
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieVideos = (id) => api.get(`/movie/${id}/videos`);

const useMovieVideos = (id) => {
    return useQuery({
        queryKey: ["movie-videos", id],
        queryFn: () => fetchMovieVideos(id),
        select: (data) => data.data.results,
    });
};

export default useMovieVideos;
