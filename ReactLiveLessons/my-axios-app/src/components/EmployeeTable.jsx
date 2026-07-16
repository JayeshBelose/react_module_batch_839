import React, { useEffect, useState } from "react";
import { deleteEmployee, getAllEmployees } from "../apiServices";

const EmployeeTable = ({ ref, setRef, setUpdatingEmployee }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, [ref]);

    const fetchEmployees = async () => {
        const { data } = await getAllEmployees();
        setEmployees(data);
    };

    const handleDelete = id => {
        if (confirm("Delete this employee?")) {
            deleteEmployee(id)
                .then(res => {
                    setRef(!ref);
                })
                .catch(err => {
                    console.log("Error in delete : ", err);
                });
        }
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
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.role}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button onClick={() => handleDelete(emp.id)}>
                                    Delete
                                </button>
                                <button onClick={() => setUpdatingEmployee(emp)}>
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
