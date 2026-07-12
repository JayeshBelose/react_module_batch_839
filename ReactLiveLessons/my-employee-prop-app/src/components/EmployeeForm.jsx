import React, { useState } from "react";

const EmployeeForm = ({ addEmployee, updateEmployee, editEmployee }) => {
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        salary: "",
    });

    if (editEmployee && employee.id !== editEmployee.id) {
        setEmployee(editEmployee);
    }

    const handleChange = e => {
        const { name, value, type } = e.target;

        const parsedValue = type === "number" ? Number(value) : value;

        setEmployee({
            ...employee,
            [name]: parsedValue,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (editEmployee) {
            updateEmployee({
                ...editEmployee,
                name: employee.name,
                salary: Number(employee.salary),
            });
        } else {
            addEmployee({
                id: Number(employee.id),
                name: employee.name,
                salary: Number(employee.salary),
            });
        }

        setEmployee({
            id: "",
            name: "",
            salary: "",
        });
    };

    return (
        <div>
            <h3>Employee Form</h3>

            <form onSubmit={handleSubmit}>
                <h3>{editEmployee ? "Update Employee" : "Add Employee"}</h3>

                <div>
                    ID :
                    <input
                        type="number"
                        name="id"
                        value={employee.id}
                        onChange={handleChange}
                        disabled={editEmployee}
                        required
                    />
                </div>

                <br />

                <div>
                    Name :
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    Salary :
                    <input
                        type="number"
                        name="salary"
                        value={employee.salary}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <button type="submit">{editEmployee ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
