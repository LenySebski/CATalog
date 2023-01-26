import { useRef } from "react";
import Logo from "../Images/Logo.png";
import Line from "../Images/Line 5.png";

function Navbar() {
	//The function of the button on click
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	return (
		<header>
			<img className='logo' src={Logo}></img>
			<nav ref={navRef}>
				<a href='/#'>Register Cat</a>
				<a href='/#'>Database</a>
				<a href='/#'>Sign In</a>
				<img className='navline' src={Line}></img>
				<a className='signup' href='/#'>
					Sign Up!
				</a>
			</nav>
		</header>
	);
}

export default Navbar;
