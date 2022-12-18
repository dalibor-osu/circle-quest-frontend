import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useLogin } from "../Hooks/useLogin";

export default function Login() {
	const { login, error, isLoading } = useLogin();

	useEffect(() => {

		const fetchProfile = async () => {
			const params = new URLSearchParams(window.location.search);
			const code = params.get("code");

			if (!code) {
				window.location.href = "/";
				return;
			}

			await login(code);
		};

		fetchProfile();
	}, []);

	return (
		<div>
			<h1>Logging in...</h1>
			{isLoading && <p>Currently Loading</p>}
			{error && <p>{error}</p>}
		</div>
	);
}