import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const username = e.target.username.value;
		const password = e.target.password.value;
		const user = { username, password };
		await window.localStorage.setItem("user", JSON.stringify(user));
		// navigate to profile page after 1s
		setTimeout(() => {
			navigate("/auth/profile");
		}, 1000);
	};
	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit} method='POST'>
				<label htmlFor='username'>Username</label>
				<input type='text' name='username' id='username' />
				<label htmlFor='password'>Password</label>
				<input type='password' name='password' id='password' />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default LoginPage;
