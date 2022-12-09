import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const token = sessionStorage.getItem("token");
	
	const handleClick = () => {

		const options = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"email": email,
				"password": password
			})
		}
		fetch('https://3001-4geeksacade-reactflaskh-pcw9fms0j7d.ws-eu78.gitpod.io/api/token', options)
		.then(resp => {
			if (resp.status === 200) return resp.json();
			else alert("There has been some error");
		})
		.then(data => {
			sessionStorage.setItem("token", data.access_token);
		})
		.catch(error => {
			console.error("There was an error!!")
		})

	}

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
				<input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
				<input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
				<button onClick={handleClick}>Login</button>
			</div>
		</div>
	);
};