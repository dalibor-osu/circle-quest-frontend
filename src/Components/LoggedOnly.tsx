import "../CSS/Components/LoggedOnly.css";

export const LoggedOnly = () => {
	return (
		<div className="logged-only">
			<h1 className="sorry-message">
                We are sorry, but this website is only for registrated users at the moment.
			</h1>
			<span className="if-allowed">You won't be able to see anything else than this page. If you think you're white-listed, try to Log In.</span><br></br>
			<span className="if-allowed">If you're interested in this website you can ask for a permission in Circle Quest's <a href="https://discord.gg/2KVkRH46Yk">Discord server</a>.</span>
		</div>
	);
};