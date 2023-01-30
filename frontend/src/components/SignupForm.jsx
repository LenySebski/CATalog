import { useState } from "react";

const SignupForm = () => {
	//signup with username and password requred and email, phone and name optional
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = { username, password, email, phone, name };
		fetch(`${import.meta.env.VITE_URL_BASE}/signup`, {
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
		<div className='signup'>
			<h2>Signup</h2>
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
				<label>Email:</label>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Phone:</label>
				<input
					type='tel'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<label>Name:</label>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button>Signup</button>
			</form>
		</div>
	);
};
