import React from "react";

const ColorPreview = ({ onViewChange }) => {
    const handleChange = e => {
        document.getElementById("pv").style.backgroundColor = e.target.value;
    };

    return (
        <div>
            <center>
                <h1>Color Preview Component</h1>
                <h2>Enter a color : </h2> <input type="color" onChange={handleChange} />
                <h2 id="pv">Preview</h2>
                <br />
                <br />
                <button onClick={() => onViewChange("HOME")}>Back to Home</button>
            </center>
        </div>
    );
};

export default ColorPreview;
