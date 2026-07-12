import React from "react";

const EmployeeTable = ({ allEmployee, deleteEmployee, setEditEmployee }) => {
    return (
        <div>
            <h3>Employee Table</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {allEmployee.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button onClick={() => setEditEmployee(emp)}>
                                    Update
                                </button>

                                <button onClick={() => deleteEmployee(emp.id)}>
                                    Delete
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
