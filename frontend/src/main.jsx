import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";
import { UserContextProvider } from "./context/UserContext";
import "@fontsource/lato/900.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/400.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	</React.StrictMode>
);
