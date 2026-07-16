import axios from "axios";

export const getAllEmployees = () => axios.get(`http://localhost:8080/employees`);
