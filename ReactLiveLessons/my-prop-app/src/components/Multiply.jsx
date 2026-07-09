import React from "react";

const Multiply = ({ multiply }) => {
    let acceptValue = multiply();

    return (
        <div>
            <h2>Multiplication : {acceptValue}</h2>
            <h2>Multiply Direct Call : {multiply()}</h2>
        </div>
    );
};

export default Multiply;
