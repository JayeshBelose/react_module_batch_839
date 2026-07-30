import React, { useEffect, useState } from "react";
import { deletePatient, getAllPatients } from "../apiServices";

const PatientTable = ({ ref, setRef, setUpdatingPatient }) => {
    const [patients, setPatients] = useState([]);

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

    return (
        <div>
            <h3>Patient Table</h3>

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
                    {patients.map(p => (
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
                                <button onClick={() => handleDelete(p.id)}>Delete</button>
                                <button onClick={() => setUpdatingPatient(p)}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientTable;
