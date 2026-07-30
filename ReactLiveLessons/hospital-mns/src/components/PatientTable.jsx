import { useEffect, useMemo, useState } from "react";
import { deletePatient, getAllPatients } from "../apiServices";

const statusClass = status => ({ Admitted: "text-bg-success", Discharged: "text-bg-secondary", "Under Treatment": "text-bg-warning" }[status] || "text-bg-light");

const PatientTable = ({ refreshKey, setRefreshKey, onEdit, onPatientsChange }) => {
    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            setIsLoading(true); setError("");
            try { const { data } = await getAllPatients(); setPatients(data); onPatientsChange(data); }
            catch { setError("Unable to load patients. Please make sure the API server is running."); }
            finally { setIsLoading(false); }
        };
        fetchPatients();
    }, [refreshKey, onPatientsChange]);

    const visiblePatients = useMemo(() => {
        const term = search.trim().toLowerCase();
        if (!term) return patients;
        return patients.filter(patient => [patient.name, patient.assignedDoctor, patient.department, patient.mobile, patient.status].some(value => String(value).toLowerCase().includes(term)));
    }, [patients, search]);

    const handleDelete = async patient => {
        if (!window.confirm(`Remove ${patient.name}'s record? This cannot be undone.`)) return;
        setDeletingId(patient.id);
        try { await deletePatient(patient.id); setRefreshKey(refreshKey + 1); }
        catch { setError("We couldn't remove this patient. Please try again."); }
        finally { setDeletingId(null); }
    };

    return <section className="card border-0 shadow-sm" aria-labelledby="patient-list-title">
        <div className="card-header bg-white border-bottom p-3 p-md-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                <div><h2 id="patient-list-title" className="h5 fw-bold mb-1">All patients</h2><p className="text-secondary small mb-0">{visiblePatients.length} {visiblePatients.length === 1 ? "record" : "records"} shown</p></div>
                <div className="input-group col-12 col-md-5 px-0"><span className="input-group-text bg-body">⌕</span><input type="search" className="form-control" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search name, doctor, department…" aria-label="Search patients" /></div>
            </div>
        </div>
        {error && <div className="alert alert-danger rounded-0 mb-0" role="alert">{error}</div>}
        <div className="table-responsive"><table className="table table-hover align-middle mb-0">
            <thead className="table-light"><tr><th className="ps-3 ps-md-4">Patient</th><th>Age</th><th>Doctor & department</th><th>Contact</th><th>Status</th><th className="text-end pe-3 pe-md-4">Actions</th></tr></thead>
            <tbody>{isLoading ? <tr><td colSpan="6" className="text-center py-5"><div className="spinner-border spinner-border-sm text-primary me-2" role="status" /><span className="text-secondary">Loading patient records…</span></td></tr> : visiblePatients.length ? visiblePatients.map(patient => <tr key={patient.id}><td className="ps-3 ps-md-4"><div className="fw-semibold">{patient.name}</div><div className="small text-secondary">{patient.gender || "Not specified"}</div></td><td>{patient.age}</td><td><div>{patient.assignedDoctor}</div><div className="small text-secondary">{patient.department}</div></td><td><div>{patient.mobile}</div><div className="small text-secondary">{patient.email}</div></td><td><span className={`badge rounded-pill ${statusClass(patient.status)}`}>{patient.status}</span></td><td className="text-end pe-3 pe-md-4 text-nowrap"><button type="button" className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(patient)}>Edit</button><button type="button" className="btn btn-sm btn-outline-danger" disabled={deletingId === patient.id} onClick={() => handleDelete(patient)}>{deletingId === patient.id ? "Removing…" : "Delete"}</button></td></tr>) : <tr><td colSpan="6" className="text-center py-5"><p className="fw-semibold mb-1">No matching patients</p><p className="text-secondary small mb-0">Try a different search term or add a new patient.</p></td></tr>}</tbody>
        </table></div>
    </section>;
};

export default PatientTable;
