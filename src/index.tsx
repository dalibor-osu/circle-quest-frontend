import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./Pages/Home";
import App from "./Pages/App";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import { AuthContextProvider } from "./Context/AuthContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/users/:id",
		element: <Profile />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);


root.render(
	<AuthContextProvider>
		<RouterProvider router={router} fallbackElement={<App />}></RouterProvider>
	</AuthContextProvider>,
);

