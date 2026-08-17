import { useApp } from "../context/AppContext";

function Summary() {
	const { tickets } = useApp();

	const total = tickets.length;

	const open = tickets.filter((ticket) => ticket.status === "Open").length;

	const resolved = tickets.filter(
		(ticket) => ticket.status === "Resolved",
	).length;

	const rejected = tickets.filter(
		(ticket) => ticket.status === "Rejected",
	).length;

	const highOpen = tickets.filter(
		(ticket) => ticket.priority === "High" && ticket.status === "Open",
	).length;

	return (
		<div>
			<h2>Summary</h2>

			<p>Total Tickets: {total}</p>
			<p>Open: {open}</p>
			<p>Resolved: {resolved}</p>
			<p>Rejected: {rejected}</p>
			<p>High-Priority Open: {highOpen}</p>
		</div>
	);
}

export default Summary;
