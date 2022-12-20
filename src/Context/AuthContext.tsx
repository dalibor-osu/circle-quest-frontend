import React, { createContext, useReducer, useEffect } from "react";
import { AuthContextType, AuthState, AuthAction, AuthActionKind } from "../Types/Auth";
import Cookies from "universal-cookie";

export const AuthContext = createContext<AuthContextType | null>(null);

export const authReducer = (state: AuthState, action: AuthAction) => {
	const { type, payload } = action;

	switch (type) {
	case "LOGIN":
		return { user: payload };

	case "LOGOUT":
		return { user: null };

	default:
		return state;
	}
};

type Props = {
    children: JSX.Element
}

export const AuthContextProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});

	useEffect(() => {
		console.log("Auth Check");
		const cookies = new Cookies();
		const token = cookies.get("token");

		if (!token) return;

		const fetchUser = async () => {
			console.log("Fetching user");
			const response = await fetch("/api/auth/user", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + token },
			});

			if (response.ok) {
				const json = await response.json();
				const newToken = json.token;
				const user = json.user;

				cookies.set("token", newToken, { path: "/", maxAge: 259000 });

				if (user) {
					dispatch({ type: AuthActionKind.LOGIN, payload: user });
				}
			}

			if (!response.ok) {
				dispatch({ type: AuthActionKind.LOGOUT, payload: null });
				cookies.remove("token");
			}

		};

		fetchUser();
	}, []);

	console.log("AuthContext state:", state);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{ children }
		</AuthContext.Provider>
	);
};