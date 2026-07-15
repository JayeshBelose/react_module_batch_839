import React, { useEffect, useState } from "react";
import { deleteEmployee, getAllEmployees } from "../employeeData";

const EmployeeTable = ({ ref, setRef, setToUpdateEmployee }) => {
    const [allEmployees, setAllEmployees] = useState([]);

    useEffect(() => {
        setAllEmployees(getAllEmployees());
    }, [ref]);

    const handleDelete = id => {
        deleteEmployee(id);
        setRef(!ref);
    };

    return (
        <div>
            <h2>Employee Table</h2>

            <table border={2}>
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
                                <button onClick={() => setToUpdateEmployee(emp)}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
