import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function About() {
	const msg = useContext(UserContext);
	return <div>About, {msg}</div>;
}

export default About;
