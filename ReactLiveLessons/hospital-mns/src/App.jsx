import { useState } from "react";
import PatientForm from "./components/PatientForm";
import PatientTable from "./components/PatientTable";

const App = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const [updatingPatient, setUpdatingPatient] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [patients, setPatients] = useState([]);

    const closeForm = () => {
        setShowForm(false);
        setUpdatingPatient(null);
    };

    const startEdit = patient => {
        setUpdatingPatient(patient);
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const admittedPatients = patients.filter(
        patient => patient.status === "Admitted",
    ).length;
    const inTreatmentPatients = patients.filter(
        patient => patient.status === "Under Treatment",
    ).length;

    return (
        <main className="min-vh-100 bg-body-tertiary">
            <nav
                className="navbar navbar-expand bg-primary shadow-sm"
                aria-label="Main navigation">
                <div className="container py-1">
                    <a className="navbar-brand text-white fw-bold" href="#top">
                        <span className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle me-2 px-2 py-1 fw-bold">
                            +
                        </span>
                        CareFlow
                    </a>
                    <span className="navbar-text text-white-50 d-none d-sm-inline">
                        Patient management portal
                    </span>
                </div>
            </nav>

            <div id="top" className="container py-4 py-md-5">
                <section className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
                    <div>
                        <p className="text-primary fw-semibold text-uppercase small mb-2">
                            Hospital dashboard
                        </p>
                        <h1 className="display-6 fw-bold mb-2">Patient directory</h1>
                        <p className="text-secondary mb-0">
                            Keep patient details, care status, and contact information in
                            one place.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary px-4 py-2 shadow-sm"
                        onClick={() => {
                            setUpdatingPatient(null);
                            setShowForm(true);
                        }}>
                        + Add patient
                    </button>
                </section>

                <section className="row g-3 mb-4" aria-label="Patient summary">
                    <div className="col-12 col-sm-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <p className="text-secondary small fw-semibold text-uppercase mb-2">
                                    Total patients
                                </p>
                                <p className="fs-2 fw-bold mb-0">{patients.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <p className="text-secondary small fw-semibold text-uppercase mb-2">
                                    Currently admitted
                                </p>
                                <p className="fs-2 fw-bold text-success mb-0">
                                    {admittedPatients}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <p className="text-secondary small fw-semibold text-uppercase mb-2">
                                    Under treatment
                                </p>
                                <p className="fs-2 fw-bold text-warning-emphasis mb-0">
                                    {inTreatmentPatients}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {showForm && (
                    <section className="mb-4" aria-label="Patient form">
                        <PatientForm
                            key={updatingPatient?.id ?? "new-patient"}
                            refreshKey={refreshKey}
                            setRefreshKey={setRefreshKey}
                            updatingPatient={updatingPatient}
                            onClose={closeForm}
                        />
                    </section>
                )}

                <PatientTable
                    refreshKey={refreshKey}
                    setRefreshKey={setRefreshKey}
                    onEdit={startEdit}
                    onPatientsChange={setPatients}
                />
            </div>
        </main>
    );
};

export default App;
