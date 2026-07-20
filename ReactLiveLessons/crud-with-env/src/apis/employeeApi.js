import { empApi } from "./axiosApi";

export const getAllEmployees = () => empApi.get();

export const deleteEmployeeById = id => empApi.delete(id);

export const addEmployee = emp => empApi.post("", emp);

export const updateEmployee = (id, emp) => empApi.put(`/${id}`, emp);
