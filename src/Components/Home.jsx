import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Home() {
	const msg = useContext(UserContext);
	return (
		<>
			Home,
			{msg}
		</>
	);
}

export default Home;
