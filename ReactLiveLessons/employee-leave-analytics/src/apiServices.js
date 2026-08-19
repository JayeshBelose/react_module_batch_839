import axios from "axios";

const api = "http://localhost:8080/leaves";

export const getAllLeaves = async () => {
    return axios.get(`${api}`);
};
