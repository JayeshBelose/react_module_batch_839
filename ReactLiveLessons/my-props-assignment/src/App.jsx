import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import Login from "./components/Login";

const App = () => {
    const [allEmployees, setAllEmployees] = useState([
        {
            id: 101,
            name: "Tejas",
            role: "Admin",
            salary: 12345.0,
            password: "Tejas",
        },
        {
            id: 102,
            name: "Raj",
            role: "Tester",
            salary: 12345.0,
            password: "Raj",
        },
    ]);
    const [updateEmployee, setUpdateEmployee] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

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

                {!loggedIn && (
                    <Login
                        allEmployees={allEmployees}
                        setLoggedIn={setLoggedIn}
                        setUser={setUser}
                    />
                )}

                {loggedIn && (
                    <div>
                        {user.role === "Admin" && (
                            <EmployeeForm
                                handleAdd={handleAdd}
                                handleUpdate={handleUpdate}
                                updateEmployee={updateEmployee}
                                setUpdateEmployee={setUpdateEmployee}
                                user={user}
                            />
                        )}

                        <EmployeeTable
                            allEmployees={allEmployees}
                            handleDelete={handleDelete}
                            setUpdateEmployee={setUpdateEmployee}
                            user={user}
                        />
                    </div>
                )}
            </center>
        </div>
    );
};

export default App;
