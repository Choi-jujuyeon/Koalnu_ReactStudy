import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const ReactQueryPage = () => {
    // 함수를 분리해서 사용해도 된다
    // const fetchPost = () => {
    //     return axios.get("http://localhost:5000/posts");
    // };
    const { isLoading, data } = useQuery({
        queryKey: ["posts"],
        // queryFn: fetchPost,
        queryFn: () => {
            return axios.get("http://localhost:5000/posts");
        },
    });
    console.log("data: ", data, isLoading);
    return <div>ReactQueryPage</div>;
};

export default ReactQueryPage;
