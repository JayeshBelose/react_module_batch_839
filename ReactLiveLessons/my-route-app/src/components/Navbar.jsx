import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to={"/form"}>Form</Link>
                <Link to={"/table"}>Table</Link>
            </nav>
        </div>
    );
};

export default Navbar;
