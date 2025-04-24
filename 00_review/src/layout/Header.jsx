import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/weather">
                <h3>날씨 웹앱 복습</h3>
            </Link>
            <Link to="/main">
                <h3>라우터 시리즈 복습</h3>
            </Link>
            <Outlet />
        </div>
    );
};

export default Header;
