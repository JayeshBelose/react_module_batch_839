function TicketDetails({ ticket, close }) {
	if (!ticket) {
		return null;
	}

	return (
		<div>
			<hr />

			<h2>Ticket Details</h2>

			<p>Employee Name: {ticket.employeeName}</p>
			<p>Department: {ticket.department}</p>
			<p>Issue Type: {ticket.issueType}</p>
			<p>Description: {ticket.description}</p>
			<p>Priority: {ticket.priority}</p>
			<p>Ticket Date: {ticket.ticketDate}</p>
			<p>Status: {ticket.status}</p>

			<button onClick={close}>Close</button>

			<hr />
		</div>
	);
}

export default TicketDetails;
