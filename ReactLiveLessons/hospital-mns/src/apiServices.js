import axios from "axios";

export const getAllPatients = () => axios.get(`http://localhost:8080/patients`);

export const addPatient = patient =>
    axios.post(`http://localhost:8080/patients`, patient);

export const deletePatient = id => axios.delete(`http://localhost:8080/patients/${id}`);

export const updatePatient = (id, patient) =>
    axios.put(`http://localhost:8080/patients/${id}`, patient);
