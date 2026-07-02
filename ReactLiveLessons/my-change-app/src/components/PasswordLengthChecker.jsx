import React, { useState } from "react";

const PasswordLengthChecker = ({ onViewChange }) => {
    const [len, setLen] = useState(0);

    const handleChange = e => {
        setLen(e.target.value.length);
    };

    return (
        <div>
            <center>
                <h1>Password Length Chekcer Component</h1>
                <h2>Enter Password : </h2>{" "}
                <input type="password" onChange={handleChange} />
                <h2>Length : {len}</h2>
                <br />
                <br />
                <button onClick={() => onViewChange("HOME")}>Back to Home</button>
            </center>
        </div>
    );
};

export default PasswordLengthChecker;
