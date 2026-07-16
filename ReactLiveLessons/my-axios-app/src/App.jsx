import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";

const App = () => {
    const [ref, setRef] = useState(true);
    const [updatingEmployee, setUpdatingEmployee] = useState(null);

    return (
        <div>
            <center>
                <h1>Employee Management</h1>

                <EmployeeForm
                    ref={ref}
                    setRef={setRef}
                    updatingEmployee={updatingEmployee}
                    setUpdatingEmployee={setUpdatingEmployee}
                />
                <EmployeeTable
                    ref={ref}
                    setRef={setRef}
                    setUpdatingEmployee={setUpdatingEmployee}
                />
            </center>
        </div>
    );
};

export default App;
