import { useEffect } from "react";
import Cookies from "universal-cookie";

export default function Login() {

	useEffect(() => {
		const fetchProfile = async () => {
			const params = new URLSearchParams(window.location.search);
			const code = params.get("code");

			if (!code) {
				window.location.href = "/";
			}

			const body = { "code": code };
			console.log(JSON.stringify(body));

			const response = await fetch("/api/user/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ "code": code }),
			});

			if (!response.ok) {
				console.log("Error when logging in user");
				const json = await response.json();
				console.log(json);
				return;
			}

			const data = await response.json();
			const token = data.token;
			const id = data.id;

			const cookies = new Cookies();
			if (token) cookies.set("token", token, { path: "/" });
			if (id) window.location.href = "/users/" + id;
		};

		fetchProfile();
	}, []);

	return (
		<div>
			<h1>Logging in...</h1>
		</div>
	);
}