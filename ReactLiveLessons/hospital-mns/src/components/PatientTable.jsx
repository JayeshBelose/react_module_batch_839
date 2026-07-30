import React, { useEffect, useState } from "react";
import { deletePatient, getAllPatients, searchPatient } from "../apiServices";

const PatientTable = ({ ref, setRef, setUpdatingPatient }) => {
    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchPatients = async () => {
            const { data } = await getAllPatients();
            setPatients(data);
        };
        fetchPatients();
    }, [ref]);

    const handleDelete = id => {
        if (confirm("Delete this patient?")) {
            deletePatient(id)
                .then(res => {
                    setRef(!ref);
                })
                .catch(err => {
                    console.log("Error in delete : ", err);
                });
        }
    };

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const result = await searchPatient(search);
            setPatients(result);
        } catch (err) {
            console.log("Search error:", err);
        }
    };

    return (
        <div>
            <h3>Patient Table</h3>

            <div>
                Search Patient :{" "}
                <input type="text" name="search" onChange={handleChange} />
                <button onClick={handleSearch}>Search</button>
            </div>

            <table border={2}>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Assigned Doctor</th>
                        <th>Department</th>
                        <th>Mobile No.</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {patients.length > 0 ? (
                        patients.map(p => (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.age}</td>
                                <td>{p.gender}</td>
                                <td>{p.assignedDoctor}</td>
                                <td>{p.department}</td>
                                <td>{p.mobile}</td>
                                <td>{p.email}</td>
                                <td>{p.status}</td>
                                <td>
                                    <button onClick={() => handleDelete(p.id)}>
                                        Delete
                                    </button>{" "}
                                    <button onClick={() => setUpdatingPatient(p)}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9">No patients found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PatientTable;
