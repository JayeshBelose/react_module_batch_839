import axios from "axios";

export const getAllPatients = () => axios.get(`http://localhost:8080/patient`);

export const addPatient = patient => axios.post(`http://localhost:8080/patient`, patient);

export const deletePatient = id => axios.delete(`http://localhost:8080/patient/${id}`);

export const updatePatient = (id, patient) =>
    axios.put(`http://localhost:8080/patient/${id}`, patient);

export const searchPatient = async key => {
    try {
        const response = await axios.get(`http://localhost:8080/patient`);
        const patients = response.data || [];

        if (!key.trim()) return patients;

        return patients.filter(patient =>
            patient.name.toLowerCase().includes(key.toLowerCase()),
        );
    } catch (err) {
        console.log(err);
        return [];
    }
};
