import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";
import { Link } from "react-router-dom";

export default function Header() {
	const { logout } = useLogout();
	const { state } = useAuthContext();

	function listenCookieChange(callback: () => void, interval = 200) {
		let lastCookie = document.cookie;
		setInterval(() => {
			const cookie = document.cookie;
			if (cookie !== lastCookie) {
				try {
					callback();
				}
				finally {
					lastCookie = cookie;
				}
			}
		}, interval);
	}

	const handleLogin = () => {
		window.open("https://osu.ppy.sh/oauth/authorize?response_type=code&client_id=19415&redirect_uri=http://localhost:3000/login&scope=public", "_blank");
		listenCookieChange((): void => {
			window.location.reload();
		});
	};

	const handleLogout = () => {
		logout();
	};

	return (
		<div>
			{state.user && <Link to="/users/6886572">User Profile</Link>}
			<Link to="/">Home</Link>
			{!state.user && <button onClick={handleLogin}>Log in</button>}
			{state.user && (
				<>
					<p>You're currently logged in as: {state.user.username.toUpperCase()}</p>
					<button onClick={handleLogout}>Log out</button>
				</>
			)}
		</div>
	);
}