import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />

                {/* 관련 라우트도 묶어줄 수 있다! */}
                <Route path="movies">
                    <Route index element={<MoviePage />} />
                    <Route path=":id" element={<MovieDetailPage />} />
                </Route>

                {/* 기존의 구성 방식 */}
                {/* <Route path="/movies" element={<MoviePage />} />
                <Route path="/movies/:id" element={<MovieDetailPage />} /> */}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
