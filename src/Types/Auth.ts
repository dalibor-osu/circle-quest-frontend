import { Dispatch } from "react";
import { IUser } from "../Interfaces/IUser";

// eslint-disable-next-line no-shadow
export enum AuthActionKind {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}

export interface AuthAction {
    type: AuthActionKind;
    payload: IUser | null
}

export interface AuthState {
    user: IUser | null,
}

export type AuthContextType = {
	state: AuthState,
	dispatch: Dispatch<AuthAction>
}