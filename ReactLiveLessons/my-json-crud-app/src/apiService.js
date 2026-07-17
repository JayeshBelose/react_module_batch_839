import axios from "axios";

export const getAllEmployees = () => axios.get(`http://localhost:8080/employees`);

export const deleteEmployeeById = id =>
    axios.delete(`http://localhost:8080/employees/${id}`);

export const addEmployee = emp => axios.post(`http://localhost:8080/employees`, emp);

export const updateEmployee = (id, emp) =>
    axios.put(`http://localhost:8080/employees/${id}`, emp);
