import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";
import { Link } from "react-router-dom";
import "../CSS/Components/Header.css";

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
		<header className="header">
			<div className="header-links">
				<div className="header-link-container">
					{state.user && <Link className="header-link" to={"/users/" + state.user.user_id}>User Profile</Link>}
					<Link className="header-link" to="/">Home</Link>
				</div>
			</div>

			<div className="header-title-container">
				<h1 className="header-title">CIRCLE QUEST</h1>
			</div>
			<div className="logged-container">
				{!state.user && <button onClick={handleLogin}>Log In</button>}
				{state.user && (
					<>
						<span className="logged-in">Logged in as: {state.user.username.toUpperCase()}</span>
						<button onClick={handleLogout}>Log Out</button>
					</>
				)}
			</div>
		</header>
	);
}