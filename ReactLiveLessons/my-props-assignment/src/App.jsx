import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";

const App = () => {
    const [allEmployees, setAllEmployees] = useState([
        {
            id: 101,
            name: "Snehal",
            role: "Developer",
            salary: 25000.0,
        },
        {
            id: 102,
            name: "Sahil",
            role: "Tester",
            salary: 23000.0,
        },
    ]);
    const [updateEmployee, setUpdateEmployee] = useState(null);

    const handleAdd = emp => {
        setAllEmployees([...allEmployees, emp]);
    };

    const handleDelete = id => {
        if (confirm("Delete this Employee?")) {
            setAllEmployees(allEmployees.filter(emp => emp.id !== id));
        }
    };

    const handleUpdate = updatedEmp => {
        setAllEmployees(
            allEmployees.map(emp => (emp.id === updatedEmp.id ? updatedEmp : emp)),
        );
        setUpdateEmployee(null);
    };

    return (
        <div>
            <center>
                <h1>Employee Management</h1>

                <EmployeeForm
                    handleAdd={handleAdd}
                    handleUpdate={handleUpdate}
                    updateEmployee={updateEmployee}
                    setUpdateEmployee={setUpdateEmployee}
                />
                <EmployeeTable
                    allEmployees={allEmployees}
                    handleDelete={handleDelete}
                    setUpdateEmployee={setUpdateEmployee}
                />
            </center>
        </div>
    );
};

export default App;
