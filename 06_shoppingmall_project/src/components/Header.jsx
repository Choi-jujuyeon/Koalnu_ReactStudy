import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>HEADER</h1>
            <Outlet />
        </div>
    );
};

export default Header;
