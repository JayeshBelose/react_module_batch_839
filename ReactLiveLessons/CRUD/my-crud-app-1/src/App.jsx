import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import { useState } from "react";

const App = () => {
    const [ref, setRef] = useState(true);
    const [toUpdateEmployee, setToUpdateEmployee] = useState(null);

    return (
        <div>
            <center>
                <EmployeeForm
                    ref={ref}
                    setRef={setRef}
                    toUpdateEmployee={toUpdateEmployee}
                    setToUpdateEmployee={setToUpdateEmployee}
                />
                <EmployeeTable
                    ref={ref}
                    setRef={setRef}
                    setToUpdateEmployee={setToUpdateEmployee}
                />
            </center>
        </div>
    );
};

export default App;
