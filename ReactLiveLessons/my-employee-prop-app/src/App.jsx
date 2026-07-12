import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";

const App = () => {
    const [allEmployee, setAllEmployee] = useState([
        { id: 1, name: "Rahul", salary: 50000 },
        { id: 2, name: "Priya", salary: 60000 },
        { id: 3, name: "Amit", salary: 45000 },
    ]);

    const [editEmployee, setEditEmployee] = useState(null);

    const deleteEmployee = id => {
        if (confirm("Delete this employee?")) {
            setAllEmployee(allEmployee.filter(emp => emp.id !== id));
        }
    };

    const addEmployee = employee => {
        setAllEmployee([...allEmployee, employee]);
    };

    const updateEmployee = updatedEmployee => {
        setAllEmployee(
            allEmployee.map(emp =>
                emp.id === updatedEmployee.id ? updatedEmployee : emp,
            ),
        );
        setEditEmployee(null);
    };

    return (
        <div>
            <center>
                <h2>Employee Management</h2>

                <EmployeeForm
                    addEmployee={addEmployee}
                    updateEmployee={updateEmployee}
                    editEmployee={editEmployee}
                />

                <EmployeeTable
                    allEmployee={allEmployee}
                    deleteEmployee={deleteEmployee}
                    setEditEmployee={setEditEmployee}
                />
            </center>
        </div>
    );
};

export default App;
