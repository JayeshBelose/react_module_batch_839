import axios from "axios";

export const getAllOrders = () => axios.get(`http://localhost:8080/orders`);

export const addOrder = order => axios.post(`http://localhost:8080/orders`, order);

export const deleteOrder = id => axios.delete(`http://localhost:8080/orders/${id}`);

export const updateOrder = (id, order) =>
    axios.put(`http://localhost:8080/orders/${id}`, order);
