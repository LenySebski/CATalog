import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", null);
	const navigate = useNavigate();

	// call this function when you want to authenticate the user
	const login = async (data) => {
		//send data to backend
		const response = await fetch("http://localhost:5002/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		setUser(data);
		navigate("/profile");
	};

	const signup = async (username, password, setErrorsArray) => {
		//send data to backend
		console.log("Signup data:", username, password);
		const response = await fetch(`${import.meta.env.VITE_BASE_URL}/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.errors) {
					console.error("Errors:", data);
					setErrorsArray(data.errors);
				} else {
					console.log("Redirecting to home page...");
					setUser({ token: data.token, username, role: "USER" });
					setTimeout(() => {
						navigate("/auth/profile");
					}, 2000);
				}
			});
	};

	// call this function to sign out logged in user
	const logout = () => {
		setUser(null);
		navigate("/", { replace: true });
	};

	const value = useMemo(
		() => ({
			user,
			signup,
			login,
			logout,
		}),
		[user]
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};
