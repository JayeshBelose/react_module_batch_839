import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/ticketService";
import { useApp } from "../context/AppContext";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const { login } = useApp();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!username || !password) {
			setError("Username and password are required");
			return;
		}

		try {
			const response = await loginUser(username, password);

			if (response.data.length === 0) {
				setError("Invalid username or password");
				return;
			}

			login(response.data[0]);

			navigate("/dashboard");
		} catch (error) {
			setError("Login failed");
		}
	};

	return (
		<div>
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<div>
					<label>Username</label>
					<br />

					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>

				<br />

				<div>
					<label>Password</label>
					<br />

					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<br />

				{error && <p>{error}</p>}

				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;
