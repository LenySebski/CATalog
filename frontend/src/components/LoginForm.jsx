import { useState } from "react";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = { username, password };
		fetch(`${import.meta.env.VITE_URL_BASE}/signin`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		})
			.then((res) => {
				if (!res.ok) {
					console.log(res);
					throw Error("Could not login");
				}
				return res.json();
			})
			.then((data) => {
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return (
		<div className='login'>
			<h2>Login</h2>
			{error && <div>{error}</div>}
			<form onSubmit={handleSubmit}>
				<label>Username:</label>
				<input
					type='text'
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Password:</label>
				<input
					type='password'
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button>Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
