import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";

const App = () => {
    const [ref, setRef] = useState(true);
    const [employeeToUpdate, setEmployeeToUpdate] = useState(null);

    return (
        <div>
            <center>
                <h1>Employee Management</h1>

                <EmployeeForm
                    ref={ref}
                    setRef={setRef}
                    employeeToUpdate={employeeToUpdate}
                    setEmployeeToUpdate={setEmployeeToUpdate}
                />
                <EmployeeTable
                    ref={ref}
                    setRef={setRef}
                    setEmployeeToUpdate={setEmployeeToUpdate}
                />
            </center>
        </div>
    );
};

export default App;
