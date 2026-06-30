import React from "react";

const App = () => {
    let name = "Jayesh";
    let a = 10;
    let b = 3;
    let num = 35124;

    function add() {
        return a + b;
    }

    function subtract() {
        return a - b;
    }

    function multiply() {
        return a * b;
    }

    function divide() {
        return a / b;
    }

    function findDigitCount() {
        let dig = 0;

        while (num > 0) {
            dig++;
            num = Math.floor(num / 10);
        }
        return dig;
    }

    return (
        <div>
            <center>
                <h1>Hello {name}</h1>

                <h2>Arithmetic Operations</h2>

                <p>
                    {a} + {b} = {add()}
                </p>
                <p>
                    {a} - {b} = {subtract()}
                </p>
                <p>
                    {a} x {b} = {multiply()}
                </p>
                <p>
                    {a} ÷ {b} = {divide()}
                </p>

                <h2>Digit count = {findDigitCount()}</h2>
            </center>
        </div>
    );
};

export default App;
