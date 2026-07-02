import React, { useState } from "react";

const LiveCharacterCounter = ({ onViewChange }) => {
    const [count, setCount] = useState(0);

    const handleChange = e => {
        setCount(e.target.value.length);
    };

    return (
        <div>
            <center>
                <h1>Live Character Counter Component</h1>
                <h2>Enter String : </h2> <input type="text" onChange={handleChange} />
                <h2>Character Count : {count}</h2>
                <br />
                <br />
                <button onClick={() => onViewChange("HOME")}>Back to Home</button>
            </center>
        </div>
    );
};

export default LiveCharacterCounter;
