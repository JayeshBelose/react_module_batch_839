import React, { useState } from "react";

const LiveIDCard = ({ onViewChange }) => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [age, setAge] = useState(0);

    const handleChange = e => {
        switch (e.target.id) {
            case "name":
                setName(e.target.value);
                break;

            case "city":
                setCity(e.target.value);
                break;

            case "age":
                setAge(e.target.value);
                break;

            default:
                setName("");
                setCity("");
                setAge(0);
                break;
        }
    };

    return (
        <div>
            <center>
                <h1>Live ID Card Component</h1>

                <h2>Enter Name : </h2>
                <input id="name" type="text" onChange={handleChange} />

                <h2>Enter City : </h2>
                <input id="city" type="text" onChange={handleChange} />

                <h2>Enter Age : </h2>
                <input id="age" type="number" onChange={handleChange} />

                <h2>ID Card :</h2>
                <h2>
                    Name : {name} | City : {city} | Age : {age}
                </h2>

                <br />
                <br />
                <button onClick={() => onViewChange("HOME")}>Back to Home</button>
            </center>
        </div>
    );
};

export default LiveIDCard;
