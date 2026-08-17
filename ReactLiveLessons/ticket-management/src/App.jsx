import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useApp } from "./context/AppContext";

function ProtectedRoute({ children }) {
	const { user } = useApp();

	if (!user) {
		return <Navigate to="/" />;
	}

	return children;
}

function App() {
	return (
		<center>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />

					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>

					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
		</center>
	);
}

export default App;
