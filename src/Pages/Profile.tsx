import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IUser } from "../Interfaces/IUser";

export default function Profile() {
	const [user, setUser] = useState<IUser | null>(null);
	const [res, setRes] = useState<string | null>(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchProfile = async () => {
			const response = await fetch("/api/user/" + id);

			if (response.ok) {
				const json = await response.json();
				console.log(json);
				setRes(JSON.stringify(json));
				setUser(json);
			}
			else {
				console.log("User not found");
			}
		};

		fetchProfile();
	}, []);


	return (
		<div>
			{user && res && (
				<>
					<h1>{user.username}</h1>
					<img></img>
					<br></br>
					<p style={{ "width": "1000px", "wordWrap": "break-word" }}>{res}</p>
				</>
			)}
			{!user && <h1>User not found!</h1>}
		</div>
	);
}