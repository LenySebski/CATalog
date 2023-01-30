import { useOutlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const UnprotectedLayout = () => {
	const { user } = useAuth();
	const outlet = useOutlet();

	return (
		<div>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/login'>Login</Link>
				<Link to='/signup'>Register</Link>
			</nav>
			{outlet}
		</div>
	);
};
