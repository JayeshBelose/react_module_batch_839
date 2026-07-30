import React, { use, useState } from "react";
import PatientForm from "./components/PatientForm";
import PatientTable from "./components/PatientTable";

const App = () => {
    const [ref, setRef] = useState(true);
    const [updatingPatient, setUpdatingPatient] = useState(null);

    return (
        <div>
            <center>
                <h1>Patient Management System</h1>
                <PatientForm
                    ref={ref}
                    setRef={setRef}
                    updatingPatient={updatingPatient}
                    setUpdatingPatient={setUpdatingPatient}
                />
                <PatientTable
                    ref={ref}
                    setRef={setRef}
                    setUpdatingPatient={setUpdatingPatient}
                />
            </center>
        </div>
    );
};

export default App;
