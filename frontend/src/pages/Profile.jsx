import React from "react";
import { useAuth } from "../hooks/useAuth";

const ProfilePage = () => {
	const { user } = useAuth();
	return (
		<div>
			<h1>Profile</h1>
			{/* <p>Username: {user.username}</p> */}
		</div>
	);
};

export default ProfilePage;
