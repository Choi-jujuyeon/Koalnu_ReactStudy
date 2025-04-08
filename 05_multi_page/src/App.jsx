import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

const App = () => {
    const [authenticate, setAuthenticate] = useState(false); //false면 로그인해라
    // UserPage를 보고하기 위한 컴포넌트
    const PrivateRoute = () => {
        //REDIRECT*******
        return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
    };
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="contact" element={<ContactPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="about/:id" element={<ProductDetailPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="user" element={<PrivateRoute />} />
            </Route>
        </Routes>
    );
};

export default App;
