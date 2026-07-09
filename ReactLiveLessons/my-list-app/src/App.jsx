import React from "react";
import { useState } from "react";

const App = () => {
    const [allEmployees, setAllEmployees] = useState([
        {
            id: 1,
            name: "Jayesh",
            role: "Developer",
            salary: "25000",
        },
    ]);
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        role: "",
        salary: "",
    });
    const [updating, setUpdating] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;

        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const newList = allEmployees.filter(emp => emp.id !== employee.id);

        setAllEmployees([...newList, employee]);
        setUpdating(false);
        setEmployee({ id: "", name: "", role: "", salary: "" });
    };

    const handleDelete = id => {
        const newList = allEmployees.filter(emp => emp.id !== id);
        setAllEmployees(newList);
    };

    const handleUpdate = emp => {
        setUpdating(true);
        setEmployee(emp);
    };

    return (
        <div>
            <center>
                <h1>Welcome to Employee List</h1>

                <h2>{updating ? "Update Employee Form" : "Add Employee Form"}</h2>
                <form onSubmit={handleSubmit}>
                    ID :{" "}
                    <input
                        type="number"
                        name="id"
                        value={employee.id}
                        onChange={handleChange}
                        required
                        readOnly={updating ? true : ""}
                    />
                    <br />
                    Name :{" "}
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Role :{" "}
                    <input
                        type="text"
                        name="role"
                        value={employee.role}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Salary :{" "}
                    <input
                        type="number"
                        name="salary"
                        value={employee.salary}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <br />
                    <input type="submit" value={updating ? "Update" : "Add"} />
                </form>

                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allEmployees.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.role}</td>
                                <td>{emp.salary}</td>
                                <td>
                                    <button onClick={() => handleDelete(emp.id)}>
                                        Delete
                                    </button>
                                    <button onClick={() => handleUpdate(emp)}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
};

export default App;
