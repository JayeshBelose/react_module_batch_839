import React from "react";
import { useState } from "react";
import Sum from "./components/Sum";
import Difference from "./components/Difference";
import Multiply from "./components/Multiply";
import Division from "./components/Division";
import Modulo from "./components/Modulo";
import ChildComponent from "./components/ChildComponent";
import ShowAllEmployees from "./components/ShowAllEmployees";

const App = () => {
    const [employees, setEmployees] = useState([
        {
            id: 101,
            name: "Raj",
            salary: 18000.0,
        },
        {
            id: 102,
            name: "Tina",
            salary: 20000.0,
        },
        {
            id: 103,
            name: "Ramesh",
            salary: 23000.0,
        },
    ]);

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const multiply = () => {
        return a * b;
    };

    const modulo = (x, y) => {
        return x % y;
    };

    const displayFromApp = msg => {
        console.log("From App --", msg);
    };

    const handleDelete = id => {
        const newList = employees.filter(emp => emp.id !== id);
        setEmployees(newList);
    };

    return (
        <div>
            <center>
                {/* <h2>Enter Numbers</h2>
                a : <input type="number" onChange={e => setA(Number(e.target.value))} />
                <br />
                b : <input type="number" onChange={e => setB(Number(e.target.value))} />
                <br />
                <Sum x={a} y={b} />
                <Difference x={a} y={b} />
                <Multiply multiply={multiply} />
                <Division x={a} y={b} />
                <Modulo modulo={modulo} x={a} y={b} /> */}

                <ChildComponent sendToParent={displayFromApp} />
                <ShowAllEmployees onIdSelect={handleDelete} tableData={employees} />
            </center>
        </div>
    );
};

export default App;
