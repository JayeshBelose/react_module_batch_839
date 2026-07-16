import axios from "axios";

export const getAllEmployees = () => axios.get(`http://localhost:8080/employees`);

export const addEmployee = employee =>
    axios.post(`http://localhost:8080/employees`, employee);

export const deleteEmployee = id => axios.delete(`http://localhost:8080/employees/${id}`);

export const updateEmployee = (id, employee) =>
    axios.put(`http://localhost:8080/employees/${id}`, employee);
