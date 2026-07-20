import { stdApi } from "./axiosApi";

export const getAllStudents = () => stdApi.get();

export const deleteStudentById = id => stdApi.delete(id);

export const addStudent = std => stdApi.post("", std);

export const updateStudent = (id, std) => stdApi.put(`/${id}`, std);
