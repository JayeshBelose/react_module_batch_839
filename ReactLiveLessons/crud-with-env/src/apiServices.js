import axios from "axios";

const BASE_URL_EMPLOYEE = import.meta.env.VITE_BASE_URL_EMPLOYEE;
const BASE_URL_STUDENT = import.meta.env.VITE_BASE_URL_STUDENT;

export const empApi = axios.create({
    baseURL: BASE_URL_EMPLOYEE,
});

export const stdApi = axios.create({
    baseURL: BASE_URL_STUDENT,
});

export const getAllEmployees = () => empApi.get();

export const deleteEmployeeById = id => empApi.delete(id);

export const addEmployee = emp => empApi.post("", emp);

export const updateEmployee = (id, emp) => empApi.put(`/${id}`, emp);

//-----------

export const getAllStudents = () => stdApi.get();

export const deleteStudentById = id => stdApi.delete(id);

export const addStudent = std => stdApi.post("", std);

export const updateStudent = (id, std) => stdApi.put(`/${id}`, std);
