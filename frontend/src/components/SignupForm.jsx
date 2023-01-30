import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [error, setError] = useState(null);
	const context = useContext(UserContext);
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = { username, password, email, phone, name };
		const res = await fetch(`${import.meta.env.VITE_URL_BASE}/signup`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		});
		const data = await res.json();
		console.log(data);
		if (data.error) {
			setError(data.error.errors);
		} else {
			context.setUser({ username, token: data.token });
			alert("Signup successful! Redirecting to home page...");
			setTimeout(() => {
				navigate("/");
			}, 3000);
		}
	};
	return (
		<div className='login'>
			{error && error.map((err) => <p>{err.msg}</p>)}
			<h2>Signup</h2>

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
