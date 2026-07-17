import React, { useState } from "react";
import { addEmployee, updateEmployee } from "../apiService";

const EmployeeForm = ({ ref, setRef, employeeToUpdate, setEmployeeToUpdate }) => {
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        role: "",
        salary: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        employeeToUpdate
            ? updateEmployee(employee.id, employee)
                  .then(res => {
                      setEmployee({
                          id: "",
                          name: "",
                          role: "",
                          salary: "",
                      });
                      setEmployeeToUpdate(null);
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

    if (employeeToUpdate && employee.id !== employeeToUpdate.id) {
        setEmployee(employeeToUpdate);
    }

    return (
        <div>
            <h3>Employee {employeeToUpdate ? "Update" : "Add"} Form</h3>

            <form onSubmit={handleSubmit}>
                {employeeToUpdate && (
                    <>
                        ID : <input type="text" name="id" value={employee.id} disabled />
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
                <button>{employeeToUpdate ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
