import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Login.css";
import Sawo from "sawo";

export default function Login({ user, setUser }) {
	const history = useHistory();

	useEffect(() => {
		localStorage.removeItem("token");
		var config = {
			containerID: "sawo-container",
			identifierType: "email",
			apiKey: "1becc7cb-07ea-4477-8d7f-2c4f4581febb",
			onSuccess: (payload) => {
				localStorage.setItem("token", payload.verification_token);
				setUser(payload.user_id);
				history.push("/");
			},
		};
		let sawo = new Sawo(config);
		sawo.showForm();
	}, [history, setUser]);

	return (
		<div className="containerStyle">
			<section>
				<h2 className="login-title">MedGuide Login</h2>
				{user ? (
					<div className="loggedin">
						<h2>User Logged In</h2>
					</div>
				) : (
					<div className="formContainer" id="sawo-container"></div>
				)}
			</section>
		</div>
	);
}
