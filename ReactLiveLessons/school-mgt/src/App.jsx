import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

const App = () => {
    const [ref, setRef] = useState(true);
    const [updatingStudent, setUpdatingStudent] = useState(null);

    return (
        <div>
            <center>
                <h1>School Management System</h1>

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
