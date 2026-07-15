import React, { useState } from "react";
import { addEmployee, updateEmployee } from "../employeeData";

const EmployeeForm = ({
    ref,
    setRef,
    handleUpdate,
    toUpdateEmployee,
    setToUpdateEmployee,
}) => {
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        role: "",
        salary: "",
    });

    const handleSubmit = e => {
        e.preventDefault();

        updateEmployee ? updateEmployee(employee) : addEmployee(employee);

        setRef(!ref);
        setEmployee({
            id: "",
            name: "",
            role: "",
            salary: "",
        });
        setToUpdateEmployee(null);
    };

    const handleChange = e => {
        const { name, value, type } = e.target;
        const parsedValue = type === "number" ? Number(value) : value;

        setEmployee({ ...employee, [name]: parsedValue });
    };

    if (toUpdateEmployee && employee.id !== toUpdateEmployee.id) {
        setEmployee(toUpdateEmployee);
    }

    return (
        <div>
            <h2>{toUpdateEmployee ? "Employee Update Form" : "Employee Add Form"}</h2>

            <form onSubmit={handleSubmit}>
                ID :{" "}
                <input
                    type="number"
                    name="id"
                    value={employee.id}
                    onChange={handleChange}
                    required
                    disabled={toUpdateEmployee}
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
                <button type="submit">{toUpdateEmployee ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
