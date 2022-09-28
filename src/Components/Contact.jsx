import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Contact() {
	const counter = useContext(UserContext);
	return (
		<>
			<h2>
				the counter is now: <span className="counter">{counter}</span>{" "}
			</h2>
		</>
	);
}

export default Contact;
