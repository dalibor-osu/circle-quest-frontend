import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";

export default function Header() {
	const { logout } = useLogout();
	const { state } = useAuthContext();

	const handleClick = () => {
		logout();
	};

	return (
		<div>
			{!state.user && <a href="https://osu.ppy.sh/oauth/authorize?response_type=code&client_id=19415&redirect_uri=http://localhost:3000/login&scope=public">Login / Register</a>}
			{state.user && (
				<>
					<p>You're currently logged in as: {state.user.username.toUpperCase()}</p>
					<button onClick={handleClick}>Log out</button>
				</>
			)}
			<br></br>
		</div>
	);
}