import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

function TicketForm({ editData, setEditData }) {
	const { createTicket, editTicket } = useApp();

	const [ticket, setTicket] = useState({
		employeeName: "",
		department: "Development",
		issueType: "Laptop",
		description: "",
		ticketDate: "",
	});

	const [error, setError] = useState("");

	useEffect(() => {
		if (editData) {
			setTicket({
				employeeName: editData.employeeName,
				department: editData.department,
				issueType: editData.issueType,
				description: editData.description,
				ticketDate: editData.ticketDate,
			});
		}
	}, [editData]);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setTicket((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const getPriority = () => {
		if (ticket.issueType === "Laptop" || ticket.issueType === "Internet") {
			return "High";
		}

		if (ticket.issueType === "Software" || ticket.issueType === "Email") {
			return "Medium";
		}

		return "Low";
	};

	const resetForm = () => {
		setTicket({
			employeeName: "",
			department: "Development",
			issueType: "Laptop",
			description: "",
			ticketDate: "",
		});

		setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!ticket.employeeName.trim()) {
			setError("Employee Name is required");
			return;
		}

		if (!ticket.description.trim()) {
			setError("Description is required");
			return;
		}

		if (!ticket.ticketDate) {
			setError("Ticket Date is required");
			return;
		}

		setError("");

		const ticketData = {
			...ticket,
			priority: getPriority(),
			status: "Open",
		};

		if (editData) {
			await editTicket(editData.id, {
				...editData,
				...ticketData,
				status: editData.status,
			});

			setEditData(null);
		} else {
			await createTicket(ticketData);
		}

		resetForm();
	};

	return (
		<div>
			<h2>{editData ? "Edit Ticket" : "Add Ticket"}</h2>

			<form onSubmit={handleSubmit}>
				<div>
					<label>Employee Name</label>
					<br />

					<input
						type="text"
						name="employeeName"
						value={ticket.employeeName}
						onChange={handleChange}
					/>
				</div>

				<br />

				<div>
					<label>Department</label>
					<br />

					<select
						name="department"
						value={ticket.department}
						onChange={handleChange}
					>
						<option>Development</option>
						<option>Testing</option>
						<option>HR</option>
						<option>Sales</option>
						<option>Support</option>
					</select>
				</div>

				<br />

				<div>
					<label>Issue Type</label>
					<br />

					<select
						name="issueType"
						value={ticket.issueType}
						onChange={handleChange}
					>
						<option>Laptop</option>
						<option>Internet</option>
						<option>Software</option>
						<option>Email</option>
						<option>Printer</option>
						<option>Other</option>
					</select>
				</div>

				<br />

				<div>
					<p>
						Priority: <strong>{getPriority()}</strong>
					</p>

					{getPriority() === "High" && <p>Urgent support required</p>}
				</div>

				<div>
					<label>Description</label>
					<br />

					<textarea
						name="description"
						value={ticket.description}
						onChange={handleChange}
					/>
				</div>

				<br />

				<div>
					<label>Ticket Date</label>
					<br />

					<input
						type="date"
						name="ticketDate"
						value={ticket.ticketDate}
						onChange={handleChange}
					/>
				</div>

				<br />

				{error && <p>{error}</p>}

				<button type="submit">
					{editData ? "Update Ticket" : "Add Ticket"}
				</button>

				{editData && (
					<button
						type="button"
						onClick={() => {
							setEditData(null);
							resetForm();
						}}
					>
						Cancel
					</button>
				)}
			</form>
		</div>
	);
}

export default TicketForm;
