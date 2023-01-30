import React from "react";
import "./Style.scss";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	defer,
} from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import { UnprotectedLayout } from "./layouts/UnprotectedLayout";
import { ProtectedLayout } from "./layouts/ProtectedLayout";
import ProfilePage from "./pages/Profile";
import NewPostPage from "./pages/NewPost";
import { AuthLayout } from "./layouts/AuthLayout";
import ErrorPage from "./pages/Error";
import SignupPage from "./pages/Signup";

const getUserData = () =>
	new Promise((resolve) =>
		setTimeout(() => {
			const user = window.localStorage.getItem("user");
			console.log("user", user);
			resolve(user);
		}, 6000)
	);

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			errorElement={<ErrorPage />}
			element={<AuthLayout />}
			loader={() => defer({ userPromise: getUserData() })}
		>
			<Route element={<UnprotectedLayout />}>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignupPage />} />
			</Route>

			<Route path='/auth' element={<ProtectedLayout />}>
				<Route path='profile' element={<ProfilePage />} />
				<Route path='newpost' element={<NewPostPage />} />
			</Route>
		</Route>
	)
);
