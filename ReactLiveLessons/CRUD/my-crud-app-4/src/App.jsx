import React, { useState } from "react";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";

const App = () => {
    const [ref, setRef] = useState(true);
    const [updatingStudent, setUpdatingStudent] = useState(null);

    return (
        <div>
            <center>
                <h1>Student Management</h1>
                <StudentForm
                    ref={ref}
                    setRef={setRef}
                    updatingStudent={updatingStudent}
                    setUpdatingStudent={setUpdatingStudent}
                />
                <StudentTable
                    ref={ref}
                    setRef={setRef}
                    setUpdatingStudent={setUpdatingStudent}
                />
            </center>
        </div>
    );
};

export default App;
