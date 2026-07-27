import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Login from "./pages/Login";

const App = () => {
    return (
        <div>
            <center>
                <h1>Router App</h1>

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/kids" element={<Kids />} />
                    <Route path="/mens" element={<Mens />} />
                    <Route path="/womens" element={<Womens />} />
                </Routes>
            </center>
        </div>
    );
};

export default App;
