import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const context = useContext(UserContext);
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
		if (data.error) {
			setError(data.errors);
		} else {
			context.setUser({ user: data.user, token: data.token });
		}
	};

	return (
		<div className='login'>
			{error && error.map((err) => <p>{err}</p>)}
			<h2>Login</h2>
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
