import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/kids"}>Kids</Link>
            </nav>
        </div>
    );
};

export default Navbar;
