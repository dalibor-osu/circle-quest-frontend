import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import Cookies from "universal-cookie";
import { AuthActionKind } from "../Types/Auth";

export const useLogin = () => {
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean | null>(null);
	const { dispatch } = useAuthContext();

	const login = async (code: string) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch("/api/user/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ "code": code }),
		});

		const json = await response.json();

		if (!response.ok) {
			console.log("Error when logging in user");
			setIsLoading(false);
			setError(json.error);
		}


		if (response.ok) {
			const token = json.token;
			const id = json.id;
			const cookies = new Cookies();
			const type = AuthActionKind.LOGIN;

			// save the user to local storage
			if (token) cookies.set("token", token, { path: "/" });

			// update auth context
			dispatch({ type, payload: json });

			setIsLoading(false);

			if (id) window.location.href = "/users/" + id;
		}
	};

	return { login, isLoading, error };
};