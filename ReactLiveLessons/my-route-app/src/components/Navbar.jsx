import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to={"/login"}>Login</Link> | <Link to={"/"}>Home</Link> |{" "}
                <Link to={"/kids"}>Kid's</Link> | <Link to={"/mens"}>Men's</Link> |{" "}
                <Link to={"/womens"}>Women's</Link>
            </nav>
        </div>
    );
};

export default Navbar;
