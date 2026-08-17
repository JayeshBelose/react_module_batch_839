import { createContext, useContext, useEffect, useState } from "react";
import {
	getTickets,
	addTicket,
	updateTicket,
	deleteTicket,
	updateStatus,
} from "../services/ticketService";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null,
	);

	const [tickets, setTickets] = useState([]);

	const login = (user) => {
		setUser(user);
		localStorage.setItem("user", JSON.stringify(user));
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	const fetchTickets = async () => {
		const response = await getTickets();
		setTickets(response.data);
	};

	useEffect(() => {
		if (user) {
			fetchTickets();
		}
	}, [user]);

	const createTicket = async (ticket) => {
		const response = await addTicket(ticket);
		setTickets([...tickets, response.data]);
	};

	const editTicket = async (id, ticket) => {
		const response = await updateTicket(id, ticket);

		setTickets(tickets.map((item) => (item.id === id ? response.data : item)));
	};

	const removeTicket = async (id) => {
		await deleteTicket(id);

		setTickets(tickets.filter((item) => item.id !== id));
	};

	const changeStatus = async (id, status) => {
		const response = await updateStatus(id, status);

		setTickets(tickets.map((item) => (item.id === id ? response.data : item)));
	};

	return (
		<AppContext.Provider
			value={{
				user,
				login,
				logout,
				tickets,
				fetchTickets,
				createTicket,
				editTicket,
				removeTicket,
				changeStatus,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useApp = () => {
	return useContext(AppContext);
};
