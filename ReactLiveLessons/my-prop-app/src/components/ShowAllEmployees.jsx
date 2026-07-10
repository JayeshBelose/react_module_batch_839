import React from "react";

const ShowAllEmployees = ({ onIdSelect }) => {
    return (
        <div>
            <button onClick={() => onIdSelect(102)}>Delete</button>
        </div>
    );
};

export default ShowAllEmployees;
