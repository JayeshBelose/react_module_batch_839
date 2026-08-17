import axios from "axios";

const API = "http://localhost:8080";

export const loginUser = (username, password) => {
	return axios.get(`${API}/users?username=${username}&password=${password}`);
};

export const getTickets = () => {
	return axios.get(`${API}/tickets`);
};

export const addTicket = (ticket) => {
	return axios.post(`${API}/tickets`, ticket);
};

export const updateTicket = (id, ticket) => {
	return axios.put(`${API}/tickets/${id}`, ticket);
};

export const deleteTicket = (id) => {
	return axios.delete(`${API}/tickets/${id}`);
};

export const updateStatus = (id, status) => {
	return axios.patch(`${API}/tickets/${id}`, {
		status: status,
	});
};
