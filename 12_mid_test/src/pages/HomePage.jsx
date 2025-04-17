import React from "react";
import Banner from "../components/Banner";
import BookBox from "../components/BookBox";
import BoxPage from "./BoxPage";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <div>인기 도서</div>
            <BoxPage />
        </div>
    );
};

export default HomePage;
