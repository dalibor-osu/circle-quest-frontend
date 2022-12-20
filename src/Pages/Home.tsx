import Header from "../Components/Header";
import { LoggedOnly } from "../Components/LoggedOnly";
import { useAuthContext } from "../Hooks/useAuthContext";
import "../CSS/Home.css";
import { Footer } from "../Components/Footer";

export default function Home() {
	const { state } = useAuthContext();

	return (
		<div>
			<Header/>
			{!state.user && <LoggedOnly/>}
			<h1>Welcome to Circle Quest!</h1>
			<img src="https://i.imgur.com/mhiERWT.png" alt="logo" className="logo-big" />
			<Footer/>
		</div>
	);
}