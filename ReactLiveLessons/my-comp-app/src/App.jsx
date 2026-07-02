import React from "react";
import Hello from "./components/Hello";
import Counter from "./components/Counter";

const App = () => {
    return (
        <div>
            <center>
                <h1>Hello from App.jsx</h1>
                <Hello />
                <Counter />
            </center>
        </div>
    );
};

export default App;
