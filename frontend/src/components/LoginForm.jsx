import { useState } from "react";

const LoginForm = ({ setUser }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = { username, password };
		const res = await fetch(`${import.meta.env.VITE_URL_BASE}/signin`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		});
		const data = await res.json();
		console.log(data);
		setUser(data);
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
