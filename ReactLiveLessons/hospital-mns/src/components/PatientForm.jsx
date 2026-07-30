import { useState } from "react";
import { addPatient, updatePatient } from "../apiServices";

const emptyPatient = {
    name: "", age: "", gender: "", assignedDoctor: "", department: "", mobile: "", email: "", status: "",
};

const PatientForm = ({ refreshKey, setRefreshKey, updatingPatient, onClose }) => {
    const [patient, setPatient] = useState(() => updatingPatient ? { ...updatingPatient } : emptyPatient);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState("");

    const handleChange = event => {
        const { name, value } = event.target;
        setPatient(currentPatient => ({ ...currentPatient, [name]: name === "age" ? value.replace(/[^0-9]/g, "") : value }));
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setIsSaving(true);
        setError("");
        try {
            const payload = { ...patient, age: Number(patient.age) };
            if (updatingPatient) await updatePatient(updatingPatient.id, payload);
            else await addPatient(payload);
            setRefreshKey(refreshKey + 1);
            onClose();
        } catch {
            setError("We couldn't save this patient. Confirm the server is running and try again.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-bottom d-flex justify-content-between align-items-center py-3 px-3 px-md-4">
                <div><h2 className="h5 fw-bold mb-1">{updatingPatient ? "Edit patient" : "Add a patient"}</h2><p className="text-secondary small mb-0">All fields are required to keep the record complete.</p></div>
                <button type="button" className="btn-close" aria-label="Close form" onClick={onClose} />
            </div>
            <div className="card-body p-3 p-md-4">
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-7"><label htmlFor="name" className="form-label fw-medium">Patient name</label><input id="name" className="form-control" name="name" value={patient.name} onChange={handleChange} placeholder="e.g. Ananya Sharma" required /></div>
                        <div className="col-md-2"><label htmlFor="age" className="form-label fw-medium">Age</label><input id="age" type="number" min="0" max="150" className="form-control" name="age" value={patient.age} onChange={handleChange} required /></div>
                        <div className="col-md-3"><label htmlFor="gender" className="form-label fw-medium">Gender</label><select id="gender" className="form-select" name="gender" value={patient.gender} onChange={handleChange} required><option value="">Select</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option></select></div>
                        <div className="col-md-6"><label htmlFor="assignedDoctor" className="form-label fw-medium">Assigned doctor</label><input id="assignedDoctor" className="form-control" name="assignedDoctor" value={patient.assignedDoctor} onChange={handleChange} placeholder="e.g. Dr. Mehta" required /></div>
                        <div className="col-md-6"><label htmlFor="department" className="form-label fw-medium">Department</label><input id="department" className="form-control" name="department" value={patient.department} onChange={handleChange} placeholder="e.g. Cardiology" required /></div>
                        <div className="col-md-4"><label htmlFor="mobile" className="form-label fw-medium">Mobile number</label><input id="mobile" type="tel" className="form-control" name="mobile" value={patient.mobile} onChange={handleChange} placeholder="10-digit number" pattern="[0-9]{10}" required /></div>
                        <div className="col-md-5"><label htmlFor="email" className="form-label fw-medium">Email address</label><input id="email" type="email" className="form-control" name="email" value={patient.email} onChange={handleChange} placeholder="name@example.com" required /></div>
                        <div className="col-md-3"><label htmlFor="status" className="form-label fw-medium">Care status</label><select id="status" className="form-select" name="status" value={patient.status} onChange={handleChange} required><option value="">Select</option><option value="Admitted">Admitted</option><option value="Under Treatment">Under treatment</option><option value="Discharged">Discharged</option></select></div>
                    </div>
                    <div className="d-flex justify-content-end gap-2 border-top mt-4 pt-3"><button type="button" className="btn btn-outline-secondary" onClick={onClose}>Cancel</button><button className="btn btn-primary px-4" disabled={isSaving}>{isSaving ? "Saving…" : updatingPatient ? "Save changes" : "Add patient"}</button></div>
                </form>
            </div>
        </div>
    );
};

export default PatientForm;
