import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
const SignupPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [errorsArray, setErrorsArray] = useState([]);
	const { signup } = useAuth();

	const handleSubmit2 = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			setErrorsArray([{ msg: "Passwords do not match" }]);
			return;
		} else {
			signup(username, password, setErrorsArray);
		}
	};

	return (
		<div>
			<h1>Signup</h1>
			<form onSubmit={handleSubmit2}>
				<input
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder='Username'
				/>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
				/>
				<input
					type='password'
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
					placeholder='Confirm Password'
				/>
				<button type='submit'>Signup</button>
			</form>
			{errorsArray &&
				errorsArray.map((error) => (
					<p key={`error-${error.param}`}>{error.msg}</p>
				))}{" "}
		</div>
	);
};

export default SignupPage;
