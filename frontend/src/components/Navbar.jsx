import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
function Navbar() {
	const { user, setUser } = useContext(UserContext);
	return (
		<header className='navbar__wrapper'>
			<img className='navbar__logo-image' src={Logo}></img>
			<nav className='navbar__container'>
				{user?.user && <Link to='/newpost'>Register cat</Link>}
				<Link to='/'>Home</Link>

				{user?.user ? (
					<a onClick={() => setUser(null)} to='#'>
						Logout
					</a>
				) : (
					<>
						<Link to='/login'>Sign In</Link>
						<Link to='/signup'>Sign Up!</Link>
					</>
				)}
			</nav>
		</header>
	);
}

export default Navbar;
