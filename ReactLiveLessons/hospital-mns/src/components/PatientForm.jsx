import React, { useState } from "react";
import { addPatient, updatePatient } from "../apiServices";

const PatientForm = ({ ref, setRef, updatingPatient, setUpdatingPatient }) => {
    const [patient, setPatient] = useState({
        name: "",
        age: "",
        gender: "",
        assignedDoctor: "",
        department: "",
        mobile: "",
        email: "",
        status: "",
    });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const parsedValue = type === "number" ? Number(value) : value;

        setPatient({ ...patient, [name]: parsedValue });
    };

    const handleSubmit = e => {
        e.preventDefault();

        updatingPatient
            ? updatePatient(patient.id, patient)
                  .then(res => {
                      setPatient({
                          name: "",
                          age: "",
                          gender: "",
                          assignedDoctor: "",
                          department: "",
                          mobile: "",
                          email: "",
                          status: "",
                      });
                      setUpdatingPatient(null);
                      setRef(!ref);
                  })
                  .catch(err => {
                      console.log("Error in update : ", err);
                  })
            : addPatient(patient)
                  .then(res => {
                      setPatient({
                          name: "",
                          age: "",
                          gender: "",
                          assignedDoctor: "",
                          department: "",
                          mobile: "",
                          email: "",
                          status: "",
                      });
                      setRef(!ref);
                  })
                  .catch(err => {
                      console.log("Error in add : ", err);
                  });
    };

    if (updatingPatient && patient.id !== updatingPatient.id) {
        setPatient(updatingPatient);
    }

    return (
        <div>
            <h3>Patient Form</h3>

            <form onSubmit={handleSubmit}>
                {updatingPatient && (
                    <>
                        ID :{" "}
                        <input
                            type="text"
                            name="id"
                            value={patient.id}
                            disabled={updatingPatient}
                        />
                        <br />
                    </>
                )}
                Patient Name :{" "}
                <input
                    type="text"
                    name="name"
                    value={patient.name}
                    onChange={handleChange}
                    required
                />
                <br />
                Age :{" "}
                <input
                    type="text"
                    name="age"
                    value={patient.age}
                    onChange={handleChange}
                    required
                />
                <br />
                Gender :{" "}
                <select
                    name="gender"
                    id="gender"
                    value={patient.gender}
                    onChange={handleChange}
                    required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <br />
                Assigned Doctor :{" "}
                <input
                    type="text"
                    name="assignedDoctor"
                    value={patient.assignedDoctor}
                    onChange={handleChange}
                    required
                />
                <br />
                Department :{" "}
                <input
                    type="text"
                    name="department"
                    value={patient.department}
                    onChange={handleChange}
                    required
                />
                <br />
                Mobile :{" "}
                <input
                    type="text"
                    name="mobile"
                    value={patient.mobile}
                    onChange={handleChange}
                    required
                />
                <br />
                Email :{" "}
                <input
                    type="text"
                    name="email"
                    value={patient.email}
                    onChange={handleChange}
                    required
                />
                <br />
                Status :{" "}
                <input
                    type="text"
                    name="status"
                    value={patient.status}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />
                <button type="submit">{updatingPatient ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default PatientForm;
