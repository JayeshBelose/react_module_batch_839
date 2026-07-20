import React, { useEffect, useState } from "react";
import { deleteEmployeeById, getAllEmployees } from "../../apiServices";

const EmployeeTable = ({ ref, setRef, setEmployeeToUpdate }) => {
    const [allEmployees, setAllEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const { data } = await getAllEmployees();
            setAllEmployees(data);
        };
        fetchEmployees();
    }, [ref]);

    const handleDelete = id => {
        if (confirm("Delete this employee?")) {
            deleteEmployeeById(id)
                .then(res => {
                    setRef(!ref);
                })
                .catch(err => {
                    console.log("Error in Delete : ", err);
                });
        }
    };

    return (
        <div>
            <h3>Employee Table</h3>

            <table border={2}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allEmployees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.role}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button onClick={() => handleDelete(emp.id)}>
                                    Delete
                                </button>
                                <button onClick={() => setEmployeeToUpdate(emp)}>
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
