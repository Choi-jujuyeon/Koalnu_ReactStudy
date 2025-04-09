import React from "react";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginPage from "../pages/LoginPage";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isLogin }) => {
    return isLogin == true ? <ProductDetailPage /> : <Navigate to="/login" />;
};

export default PrivateRoute;
