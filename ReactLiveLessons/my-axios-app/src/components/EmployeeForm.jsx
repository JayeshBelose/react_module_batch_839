import React, { useState } from "react";
import { addEmployee, updateEmployee } from "../apiServices";

const EmployeeForm = ({ ref, setRef, updatingEmployee, setUpdatingEmployee }) => {
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        role: "",
        salary: "",
    });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const parsedValue = type === "number" ? Number(value) : value;

        setEmployee({ ...employee, [name]: parsedValue });
    };

    const handleSubmit = e => {
        e.preventDefault();

        updatingEmployee
            ? updateEmployee(employee.id, employee)
                  .then(res => {
                      setEmployee({
                          id: "",
                          name: "",
                          role: "",
                          salary: "",
                      });
                      setUpdatingEmployee(null);
                      setRef(!ref);
                  })
                  .catch(err => {
                      console.log("Error in update : ", err);
                  })
            : addEmployee(employee)
                  .then(res => {
                      setEmployee({
                          id: "",
                          name: "",
                          role: "",
                          salary: "",
                      });
                      setRef(!ref);
                  })
                  .catch(err => {
                      console.log("Error in add : ", err);
                  });
    };

    if (updatingEmployee && employee.id !== updatingEmployee.id) {
        setEmployee(updatingEmployee);
    }

    return (
        <div>
            <h2>Employee {updatingEmployee ? "Update" : "Add"} Form</h2>

            <form onSubmit={handleSubmit}>
                {updatingEmployee && (
                    <>
                        ID :{" "}
                        <input
                            type="text"
                            name="id"
                            value={employee.id}
                            disabled={updatingEmployee}
                        />
                        <br />
                    </>
                )}
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
                <button type="submit">{updatingEmployee ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
