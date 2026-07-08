import React, { useState } from "react";

const App = () => {
    const [allEmployee, setAllEmployee] = useState([
        {
            id: 101,
            name: "Jayesh",
            role: "Developer",
            grossSalary: 30000.0,
            PF: 1800.0,
            insurance: 1200.0,
        },
        {
            id: 102,
            name: "Neha",
            role: "Consultant",
            grossSalary: 20000.0,
            PF: 1500.0,
            insurance: 1000.0,
        },
    ]);
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        role: "",
        grossSalary: "",
        PF: "",
        insurance: "",
    });

    const getInHandSalary = emp => {
        return (emp.grossSalary - (emp.PF + emp.insurance)).toFixed(2);
    };

    const handleChange = e => {
        let { name, value, type } = e.target;

        const parserValue = type === "number" ? Number(value) : value;

        setEmployee({ ...employee, [name]: parserValue });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setAllEmployee([...allEmployee, employee]);
    };

    const handleDelete = emp => {
        if (confirm("Delete this employee?")) {
            const newList = allEmployee.filter(e => e.id !== emp.id);
            setAllEmployee(newList);
        }
    };

    return (
        <div>
            <center>
                <h1>Employee Management</h1>

                <h3>Employee Form</h3>
                <form onSubmit={handleSubmit}>
                    ID :{" "}
                    <input
                        type="number"
                        name="id"
                        value={employee.id}
                        onChange={handleChange}
                        required
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
                    Gross Salary :{" "}
                    <input
                        type="number"
                        name="grossSalary"
                        value={employee.grossSalary}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    PF :{" "}
                    <input
                        type="number"
                        name="PF"
                        value={employee.PF}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Insurance :{" "}
                    <input
                        type="number"
                        name="insurance"
                        value={employee.insurance}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>

                <h3>Employee List</h3>

                <table border={2}>
                    <thead>
                        <tr>
                            <th rowSpan={2}>ID</th>
                            <th rowSpan={2}>Name</th>
                            <th rowSpan={2}>Role</th>
                            <th colSpan={4}>Salary Details</th>
                            <th rowSpan={2}>Actions</th>
                        </tr>
                        <tr>
                            <th>Gross Salary</th>
                            <th>PF</th>
                            <th>Insurance</th>
                            <th>In Hand Salary</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allEmployee.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.role}</td>
                                <td>{emp.grossSalary.toFixed(2)}</td>
                                <td>{emp.PF.toFixed(2)}</td>
                                <td>{emp.insurance.toFixed(2)}</td>
                                <td>{getInHandSalary(emp)}</td>
                                <td>
                                    <button onClick={() => handleDelete(emp)}>
                                        Delete
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
