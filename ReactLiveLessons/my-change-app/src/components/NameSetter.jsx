import React, { useState } from "react";

const NameSetter = ({ onViewChange }) => {
    const [name, setName] = useState("");

    return (
        <center>
            <h1>Name Setter Component</h1>

            <h2>Hello {name}</h2>

            <h2>Enter Name</h2>

            <input type="text" value={name} onChange={e => setName(e.target.value)} />

            <br />
            <br />

            <button onClick={() => onViewChange("HOME")}>Back to Home</button>
        </center>
    );
};

export default NameSetter;
