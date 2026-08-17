import { useState } from "react";
import { useApp } from "../context/AppContext";
import TicketDetails from "./TicketDetails";

function TicketList({ tickets, setEditData }) {
	const { removeTicket, changeStatus } = useApp();

	const [selectedTicket, setSelectedTicket] = useState(null);

	const handleDelete = async (ticket) => {
		if (ticket.status !== "Open") {
			return;
		}

		const confirmDelete = window.confirm("Delete this ticket?");

		if (!confirmDelete) {
			return;
		}

		await removeTicket(ticket.id);
	};

	const handleResolve = async (ticket) => {
		if (ticket.status !== "Open") {
			return;
		}

		await changeStatus(ticket.id, "Resolved");
	};

	const handleReject = async (ticket) => {
		if (ticket.status !== "Open") {
			return;
		}

		await changeStatus(ticket.id, "Rejected");
	};

	return (
		<div>
			<h2>Tickets</h2>

			{tickets.length === 0 ? (
				<p>No tickets found</p>
			) : (
				<table border="1">
					<thead>
						<tr>
							<th>Employee</th>
							<th>Department</th>
							<th>Issue</th>
							<th>Priority</th>
							<th>Date</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>
						{tickets.map((ticket) => (
							<tr key={ticket.id}>
								<td>{ticket.employeeName}</td>
								<td>{ticket.department}</td>
								<td>{ticket.issueType}</td>
								<td>
									{ticket.priority}

									{ticket.priority === "High" && ticket.status === "Open" && (
										<p>Urgent support required</p>
									)}
								</td>
								<td>{ticket.ticketDate}</td>
								<td>{ticket.status}</td>
								<td>
									<button onClick={() => setSelectedTicket(ticket)}>
										View
									</button>

                                    <button onClick={() => handleDelete(ticket)}>
												Delete
											</button>

									{ticket.status === "Open" && (
										<>
											<button onClick={() => setEditData(ticket)}>Edit</button>

											<button onClick={() => handleResolve(ticket)}>
												Resolve
											</button>

											<button onClick={() => handleReject(ticket)}>
												Reject
											</button>
										</>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}

			<TicketDetails
				ticket={selectedTicket}
				close={() => setSelectedTicket(null)}
			/>
		</div>
	);
}

export default TicketList;
