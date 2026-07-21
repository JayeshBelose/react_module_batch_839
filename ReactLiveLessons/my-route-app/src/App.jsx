import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kids from "./pages/Kids";

const App = () => {
    return (
        <div>
            <center>
                <h1>Router App</h1>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/kids" element={<Kids />} />
                </Routes>
            </center>
        </div>
    );
};

export default App;
