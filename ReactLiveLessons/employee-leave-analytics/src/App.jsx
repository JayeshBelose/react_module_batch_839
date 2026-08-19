import { useEffect, useState } from "react";
import { getAllLeaves } from "./apiServices";

export default function App() {
    const [leaves, setLeaves] = useState([]);

    const [loadingLeaves, setLoadingLeaves] = useState(false);
    const [error, setError] = useState(false);

    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [leaveType, setLeaveType] = useState("All");
    const [status, setStatus] = useState("All");

    const getLeaves = async () => {
        setLoadingLeaves(true);

        try {
            const { data } = await getAllLeaves();

            if (data) {
                setLeaves(data);
            }
        } catch (error) {
            setError(true);
            console.log("Error in fetching leaves.");
        } finally {
            setLoadingLeaves(false);
        }
    };

    useEffect(() => {
        getLeaves();
    }, []);

    const getSufficiency = (days, balance) => {
        return days > balance
            ? "Insufficient Leave Balance"
            : balance <= 2
              ? "Low Leave Balance"
              : "Sufficient Leave Balance";
    };

    const getTypeLimit = (days, type) => {
        switch (type) {
            case "Sick Leave":
                return days > 5 ? "Policy Limit Exceeded" : "Within Policy";

            case "Casual Leave":
                return days > 3 ? "Policy Limit Exceeded" : "Within Policy";

            case "Work From Home":
                return days > 2 ? "Policy Limit Exceeded" : "Within Policy";

            default:
                return "";
        }
    };

    const getLimit = (days, balance, type) => {
        return days > 5
            ? "Manager Approval Required"
            : getTypeLimit(days, type);
    };

    const filteredLeaves = leaves.filter((leave) => {
        const matchesSearch = leave.employeeName
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesDepartment =
            department === "All" || leave.department === department;

        const matchesLeaveType =
            leaveType === "All" || leave.leaveType === leaveType;

        const matchesStatus = status === "All" || leave.status === status;

        return (
            matchesSearch &&
            matchesDepartment &&
            matchesLeaveType &&
            matchesStatus
        );
    });

    const totalRequests = filteredLeaves.length;

    const pendingRequests = filteredLeaves.filter(
        (leave) => leave.status === "Pending",
    ).length;

    const approvedRequests = filteredLeaves.filter(
        (leave) => leave.status === "Approved",
    ).length;

    const rejectedRequests = filteredLeaves.filter(
        (leave) => leave.status === "Rejected",
    ).length;

    const approvedLeaveDays = filteredLeaves
        .filter((leave) => leave.status === "Approved")
        .reduce((total, leave) => total + leave.days, 0);

    const pendingLeaveDays = filteredLeaves
        .filter((leave) => leave.status === "Pending")
        .reduce((total, leave) => total + leave.days, 0);

    if (loadingLeaves) return <h2>Loading leaves</h2>;

    if (error) return <h2>Error fetching leaves data</h2>;

    return (
        <center>
            <h1>Employee Leave Analytics Dashboard</h1>
            <hr />

            <label>Total: </label>
            {totalRequests}
            {" | "}

            <label>Pending: </label>
            {pendingRequests}
            {" | "}

            <label>Approved: </label>
            {approvedRequests}
            {" | "}

            <label>Rejected: </label>
            {rejectedRequests}

            <br />

            <label>Approved Leave Days: </label>
            {approvedLeaveDays}

            <br />

            <label>Pending Leave Days: </label>
            {pendingLeaveDays}

            <hr />

            <label>Search Employee: </label>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter employee name"
            />

            {"  "}

            <label>Department: </label>
            <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="HR">HR</option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
            </select>

            {"  "}

            <label>Leave Type: </label>
            <select
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Earned Leave">Earned Leave</option>
                <option value="Work From Home">Work From Home</option>
            </select>

            {"  "}

            <label>Status: </label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
            </select>

            <hr />

            <h3>Leave List</h3>

            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Leave Type</th>
                        <th>Days</th>
                        <th>Balance</th>
                        <th>Status</th>
                        <th>Policy</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredLeaves.map((l) => (
                        <tr key={l.id}>
                            <td>{l.id}</td>
                            <td>{l.employeeName}</td>
                            <td>{l.department}</td>
                            <td>{l.leaveType}</td>
                            <td>{l.days}</td>
                            <td>{l.availableBalance}</td>
                            <td>{l.status}</td>
                            <td>
                                {getSufficiency(l.days, l.availableBalance)}
                                {" | "}
                                {getLimit(
                                    l.days,
                                    l.availableBalance,
                                    l.leaveType,
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {filteredLeaves.length === 0 && <h3>No leave records found</h3>}
        </center>
    );
}
