import React, { useState } from "react";

const LiveClickCounter = ({ onViewChange }) => {
    const [count, setCount] = useState(0);

    const handleClick = e => {
        if (e.target.id === "inc") {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <center>
                <h1>Live Click Counter Component</h1>
                <button id="inc" onClick={handleClick}>
                    Increase
                </button>
                <h2>Count : {count}</h2>
                <button id="dec" onClick={handleClick}>
                    Decrease
                </button>

                <br />
                <br />
                <button onClick={() => onViewChange("HOME")}>Back to Home</button>
            </center>
        </div>
    );
};

export default LiveClickCounter;
