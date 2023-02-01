import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
export const RootLayout = () => {
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};
