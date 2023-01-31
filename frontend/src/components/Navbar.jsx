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
				{user?.user && (
					<Link to='/newpost'>
						<span className='navbar__link'>Register cat</span>
					</Link>
				)}
				<Link to='/'>
					<span className='navbar__link'>Home</span>
				</Link>

				{user?.user ? (
					<a onClick={() => setUser(null)} to='#'>
						<span className='navbar__link'>Logout</span>
					</a>
				) : (
					<>
						<Link to='/login'>
							<span className='navbar__link'>Sign In</span>
						</Link>
						<Link to='/signup'>
							<span className='navbar__link'>Sign Up!</span>
						</Link>
					</>
				)}
			</nav>
		</header>
	);
}

export default Navbar;
