import axios from "axios";

export const getAllStudents = () => axios.get(`http://localhost:8080/students`);

export const addStudent = student =>
    axios.post(`http://localhost:8080/students`, student);

export const deleteStudent = id => axios.delete(`http://localhost:8080/students/${id}`);

export const updateStudent = (id, student) =>
    axios.put(`http://localhost:8080/students/${id}`, student);
