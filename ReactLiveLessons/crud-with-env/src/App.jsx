import React, { useState } from "react";
import EmployeeTable from "./components/employee/EmployeeTable";
import EmployeeForm from "./components/employee/EmployeeForm";
import StudentForm from "./components/student/StudentForm";
import StudentTable from "./components/student/StudentTable";

const App = () => {
    const [ref, setRef] = useState(true);
    const [target, setTarget] = useState("Student");
    const [employeeToUpdate, setEmployeeToUpdate] = useState(null);
    const [studentToUpdate, setStudentToUpdate] = useState(null);

    return (
        <div>
            <center>
                <button
                    onClick={() =>
                        setTarget(target === "Employee" ? "Student" : "Employee")
                    }>
                    Switch to {target === "Employee" ? "Student" : "Employee"} Management
                </button>

                {target === "Employee" ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <h1>Student Management</h1>

                        <StudentForm
                            ref={ref}
                            setRef={setRef}
                            studentToUpdate={studentToUpdate}
                            setStudentToUpdate={setStudentToUpdate}
                        />
                        <StudentTable
                            ref={ref}
                            setRef={setRef}
                            setStudentToUpdate={setStudentToUpdate}
                        />
                    </>
                )}
            </center>
        </div>
    );
};

export default App;
