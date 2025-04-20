import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";

//1. 배너 => popular 영화를 들고와서 첫 번째 아이템을 보여주자!
//2. popular movie
//3. top rated movie
//4. upcoming movie
const HomePage = () => {
    return (
        <div>
            {/* <h1>HOMEPAGE</h1> */}
            <Banner />
            <PopularMovieSlide />
            <TopRatedMovieSlide />
            <UpcomingMovieSlide />
        </div>
    );
};

export default HomePage;
