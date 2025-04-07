import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
    return (
        // <div>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="contact" element={<ContactPage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>
        </Routes>

        // </div>
    );
};

export default App;
