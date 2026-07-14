import React from "react";

const Login = ({ allEmployees, setLoggedIn, setUser }) => {
    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const password = e.target.password.value;

        const employee = allEmployees.find(
            emp => emp.name === name && emp.password === password,
        );

        if (employee) {
            setLoggedIn(true);
            setUser(employee);
        } else {
            setLoggedIn(false);
            alert("Invalid username or password");
        }
    };

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                Name : <input type="text" name="name" required />
                <br />
                Password : <input type="password" name="password" required />
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
