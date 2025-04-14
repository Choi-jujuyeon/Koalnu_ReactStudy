import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ReactQueryPage from "./pages/ReactQueryPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<HomePage />} />
                <Route path="/reactQuery" element={<ReactQueryPage />} />
            </Route>
        </Routes>
    );
};

export default App;
