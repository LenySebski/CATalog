import React, { useState } from "react";
import "./Style.scss";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { NewPostPage } from "./pages/NewPost";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";

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
				path: "/newPost",
				element: <NewPostPage />,
			},
		],
	},
]);
