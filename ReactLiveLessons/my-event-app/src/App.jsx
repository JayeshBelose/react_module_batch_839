import React, { useState } from "react";

const App = () => {
    const [emp, setEmp] = useState({
        name: "",
        role: "",
        salary: "",
    });
    const [submited, setSubmited] = useState(false);

    const handleChange = e => {
        setSubmited(false);

        setEmp({ ...emp, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setSubmited(true);
    };

    return (
        <div>
            <center>
                <h1>Employee Form</h1>
                <form onSubmit={handleSubmit}>
                    Name :{" "}
                    <input
                        name="name"
                        type="text"
                        value={emp.name}
                        onChange={handleChange}
                    />
                    <br />
                    Role :{" "}
                    <input
                        name="role"
                        type="text"
                        value={emp.role}
                        onChange={handleChange}
                    />
                    <br />
                    Salary :{" "}
                    <input
                        name="salary"
                        type="number"
                        value={emp.salary}
                        onChange={handleChange}
                    />
                    <br />
                    <input type="submit" />
                </form>

                {submited && (
                    <div>
                        <h2>Name : {emp.name}</h2>
                        <h2>Role : {emp.role}</h2>
                        <h2>Salary : {emp.salary}</h2>
                    </div>
                )}
            </center>
        </div>
    );
};

export default App;
