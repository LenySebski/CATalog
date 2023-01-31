import "./Style.scss";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { NewPostPage } from "./pages/NewPost";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { SignupPage } from "./pages/Signup";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/signup",
				element: <SignupPage />,
			},
			{
				path: "/newPost",
				element: <NewPostPage />,
			},
		],
	},
]);
