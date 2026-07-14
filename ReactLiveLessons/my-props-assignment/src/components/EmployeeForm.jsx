import React, { useState } from "react";

const EmployeeForm = ({ handleAdd, handleUpdate, updateEmployee, setUpdateEmployee }) => {
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        role: "",
        salary: "",
    });

    const handleSubmit = e => {
        e.preventDefault();

        updateEmployee ? handleUpdate(employee) : handleAdd(employee);

        setEmployee({
            id: "",
            name: "",
            role: "",
            salary: "",
        });
        setUpdateEmployee(null);
    };

    const handleChange = e => {
        const { name, value, type } = e.target;
        const parsedValue = type === "number" ? Number(value) : value;

        setEmployee({ ...employee, [name]: parsedValue });
    };

    if (updateEmployee && employee.id !== updateEmployee.id) {
        setEmployee(updateEmployee);
    }

    return (
        <div>
            <h2>{updateEmployee ? "Employee Update Form" : "Employee Add Form"}</h2>

            <form onSubmit={handleSubmit}>
                ID :{" "}
                <input
                    type="number"
                    name="id"
                    value={employee.id}
                    onChange={handleChange}
                    required
                    disabled={updateEmployee}
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
                <button type="submit">{updateEmployee ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
