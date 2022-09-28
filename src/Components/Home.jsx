import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Home() {
	const msg = useContext(UserContext);
	return (
		<>
			<div className="container">
				Home,
				<span className="counter">{msg}</span>
			</div>
		</>
	);
}

export default Home;
