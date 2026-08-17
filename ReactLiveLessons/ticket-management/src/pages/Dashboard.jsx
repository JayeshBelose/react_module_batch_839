import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useApp } from "../context/AppContext";

import Summary from "../components/Summary";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";

function Dashboard() {
	const { user, logout, tickets } = useApp();

	const navigate = useNavigate();

	const [editData, setEditData] = useState(null);
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");
	const [issueFilter, setIssueFilter] = useState("All");

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	const filteredTickets = tickets.filter((ticket) => {
		const searchMatch = ticket.employeeName
			.toLowerCase()
			.includes(search.toLowerCase());

		const statusMatch =
			statusFilter === "All" || ticket.status === statusFilter;

		const issueMatch =
			issueFilter === "All" || ticket.issueType === issueFilter;

		return searchMatch && statusMatch && issueMatch;
	});

	return (
		<div>
			<h1>IT Service Ticket Management</h1>

			<p>Welcome {user.username}</p>

			<button onClick={handleLogout}>Logout</button>

			<hr />

			<Summary />

			<hr />

			<TicketForm editData={editData} setEditData={setEditData} />

			<hr />

			<h2>Search and Filter</h2>

			<div>
				<label>Search Employee:</label>

				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<br />

			<div>
				<label>Status:</label>

				<select
					value={statusFilter}
					onChange={(e) => setStatusFilter(e.target.value)}
				>
					<option value="All">All</option>
					<option value="Open">Open</option>
					<option value="Resolved">Resolved</option>
					<option value="Rejected">Rejected</option>
				</select>
			</div>

			<br />

			<div>
				<label>Issue Type:</label>

				<select
					value={issueFilter}
					onChange={(e) => setIssueFilter(e.target.value)}
				>
					<option value="All">All</option>
					<option value="Laptop">Laptop</option>
					<option value="Internet">Internet</option>
					<option value="Software">Software</option>
					<option value="Email">Email</option>
					<option value="Printer">Printer</option>
					<option value="Other">Other</option>
				</select>
			</div>

			<br />

			<button
				onClick={() => {
					setSearch("");
					setStatusFilter("All");
					setIssueFilter("All");
				}}
			>
				Reset
			</button>

			<hr />

			<TicketList tickets={filteredTickets} setEditData={setEditData} />
		</div>
	);
}

export default Dashboard;
