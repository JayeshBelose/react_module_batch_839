import axios from "axios";

const BASE_URL_EMPLOYEE = import.meta.env.VITE_BASE_URL_EMPLOYEE;
const BASE_URL_STUDENT = import.meta.env.VITE_BASE_URL_STUDENT;

export const empApi = axios.create({
    baseURL: BASE_URL_EMPLOYEE,
});

export const stdApi = axios.create({
    baseURL: BASE_URL_STUDENT,
});
