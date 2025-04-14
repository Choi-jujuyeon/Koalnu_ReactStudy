import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>HEADER</h1>
            <Link to="/">
                <h3>HomePage</h3>
            </Link>
            <Link to="/reactQuery">
                <h3>ReactQueryPage</h3>
            </Link>
            <Outlet />
        </div>
    );
};

export default Header;
