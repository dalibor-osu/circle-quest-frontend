import { useAuthContext } from "./useAuthContext";
import Cookies from "universal-cookie";
import { AuthActionKind } from "../Types/Auth";

export const useLogout = () => {
	const { dispatch } = useAuthContext();

	const logout = () => {
		const cookies = new Cookies;
		const kind = AuthActionKind.LOGOUT;
		// remove user from storage
		cookies.remove("token", { path: "/" });

		// dispatch logout action
		dispatch({ type: kind, payload: null });
	};

	return { logout };
};