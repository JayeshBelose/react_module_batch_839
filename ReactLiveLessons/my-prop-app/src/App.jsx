import React from "react";
import { useState } from "react";
import Sum from "./components/Sum";
import Difference from "./components/Difference";
import Multiply from "./components/Multiply";
import Division from "./components/Division";

const App = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const multiply = () => {
        return a * b;
    };

    return (
        <div>
            <center>
                <h2>Enter Numbers</h2>
                a : <input type="number" onChange={e => setA(Number(e.target.value))} />
                <br />
                b : <input type="number" onChange={e => setB(Number(e.target.value))} />
                <br />
                <Sum x={a} y={b} />
                <Difference x={a} y={b} />
                <Multiply multiply={multiply} />
                <Division x={a} y={b} />
            </center>
        </div>
    );
};

export default App;
