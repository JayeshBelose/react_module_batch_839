import React from "react";

function App() {
    let name = "Jayesh";
    let count = 0;
    let isOnline = false;

    const a = 20;
    const b = 5;

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

    function increaseCount() {
        count++;
        document.getElementById("count").innerHTML = count;
    }

    function login() {
        isOnline = !isOnline;

        document.getElementById("heading").innerHTML = isOnline
            ? `Hello ${name}`
            : "Hello from JSX";

        document.getElementById("loginBtn").innerHTML = isOnline ? "Logout" : "Login";
    }

    return (
        <div>
            <center>
                <h1 id="heading">Hello from JSX</h1>

                <button id="loginBtn" onClick={login}>
                    Login
                </button>
                <br />

                <button onClick={increaseCount}>Increase Count</button>

                <h2>
                    Count: <span id="count">0</span>
                </h2>

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
            </center>
        </div>
    );
}

export default App;
