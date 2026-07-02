import React, { useState } from "react";

const StudentProfile = ({ onViewChange }) => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");

    const handleChange = e => {
        e.target.id === "name" ? setName(e.target.value) : setCourse(e.target.value);
    };

    return (
        <center>
            <h1>Student Profile Component</h1>
            <h2>Enter Name : </h2> <input id="name" type="text" onChange={handleChange} />
            <h2>Hello {name}</h2>
            <h2>Enter Course : </h2>{" "}
            <input id="course" type="text" onChange={handleChange} />
            <h2>From {course}</h2>
            <br />
            <br />
            <button onClick={() => onViewChange("HOME")}>Back to Home</button>
        </center>
    );
};

export default StudentProfile;
