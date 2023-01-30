import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
function Navbar() {
	const { user, setUser } = useContext(UserContext);

	return (
		<header>
			<img className='logo' src={Logo}></img>
			<nav>
				<Link className='home' to='/'>
					Home
				</Link>
				{user?.username || null}

				{user?.username && (
					<a onClick={() => setUser(null)} to='#'>
						Logout
					</a>
				)}
				<Link className='login' to='/login'>
					Login
				</Link>
			</nav>
		</header>
	);
}

export default Navbar;
