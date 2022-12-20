import "../CSS/Components/Footer.css";
import discordLogo from "../Img/discord_logo.png";
import osuLogo from "../Img/osu_logo.png";
import githubLogo from "../Img/github_logo.png";


export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<span>
					<a className="logo" href="https://discord.gg/2KVkRH46Yk"><img src={discordLogo} alt="discord" /></a>
					<a className="logo" href="https://github.com/dalibor-osu/circle-quest-frontend"><img src={githubLogo} alt="github" /></a>
					<a className="logo" href="https://osu.ppy.sh/users/6886572"><img src={osuLogo} alt="osu" /></a>
				</span>
			</div>
		</footer>
	);
};