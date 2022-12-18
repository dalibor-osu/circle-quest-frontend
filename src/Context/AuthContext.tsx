import React, { createContext, useReducer, useEffect } from "react";
import { IUser } from "../Interfaces/IUser";
import { AuthContextType, AuthState, AuthAction, AuthActionKind } from "../Types/Auth";

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
		const user_string = localStorage.getItem("user");

		if (!user_string) return;

		const user: IUser = JSON.parse(user_string);

		if (user) {
			dispatch({ type: AuthActionKind.LOGIN, payload: user });
		}
	}, []);

	console.log("AuthContext state:", state);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{ children }
		</AuthContext.Provider>
	);
};