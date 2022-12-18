import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";

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
				setRes(JSON.stringify(json, null, 2));
				setUser(json);
			}
			else {
				console.error("User not found");
			}
		};

		fetchProfile();
	}, []);


	return (
		<div>
			<Header/>
			{user && res && (
				<>
					<h1>{user.username}</h1>
					<img src={user.additional_info.avatar_url}></img>
					<br></br>
					<div><pre>{ res }</pre></div>
				</>
			)}
			{!user && <h1>User not found!</h1>}
		</div>
	);
}