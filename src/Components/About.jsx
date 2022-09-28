import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function About() {
	const msg = useContext(UserContext);
	return (
		<div>
			About, <span className="counter">{msg}</span>{" "}
		</div>
	);
}

export default About;
