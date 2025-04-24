import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Weather from "./pages/weatherPages/Weather";
import Header from "./layout/Header";
import AboutPage from "./pages/routerExPages/AboutPage";
import ProductsPage from "./pages/routerExPages/ProductsPage";
import ProductDetailPage from "./pages/routerExPages/ProductDetailPage";
import Main from "./pages/routerExPages/Main";
import Userpage from "./pages/routerExPages/Userpage";
import { Navigate } from "react-router-dom";

const App = () => {
    const [authenticate, setAuthenticate] = useState(false);
    const PrivateRoute = () => {
        return authenticate == true ? <Userpage /> : <Navigate to="/about" />;
    };
    return (
        <div>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="weather" element={<Weather />} />
                    <Route
                        path="main"
                        element={<Main setAuthenticate={setAuthenticate} />}
                    />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="product" element={<ProductsPage />} />
                    <Route path="product/:id" element={<ProductDetailPage />} />
                    <Route path="user" element={<PrivateRoute />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
