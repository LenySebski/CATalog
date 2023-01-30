import { Navigate, useOutlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedLayout = async () => {
	const { user, logout } = await useAuth();
	const outlet = useOutlet();

	if (!user) {
		return <Navigate to='/login' />;
	}

	return (
		<div>
			{/* has to switch with upgraded navbar */}
			<nav>
				<Link to='/auth/newpost'>New Post</Link>
				<Link to='/auth/profile'>Profile</Link>
				<a onClick={logout}>Logout</a>
				<button onClick={logout}>Logout</button>
			</nav>
			{outlet}
		</div>
	);
};
