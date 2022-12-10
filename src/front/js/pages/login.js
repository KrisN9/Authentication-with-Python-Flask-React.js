import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	
	const token = sessionStorage.getItem("token");
	console.log("This is your token", token);
	const handleClick = () => {
		actions.login(email, password).then(() => {
			navigate.push('/');
		})
	};	

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
}