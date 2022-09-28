import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";
import { UserContext } from "./Components/UserContext";
function App() {
	const [counter, setCounter] = useState(0);
	const increment = () => {
		setCounter(counter + 1);
	};
	return (
		<>
			<div>
				<button>
					<Link to="Home">Home</Link>
				</button>
				<button>
					<Link to="About">About</Link>
				</button>
				<button>
					<Link to="Contact">Contact</Link>
				</button>
				<button>{counter}</button>
				<button onClick={increment}>+</button>
			</div>
			<UserContext.Provider value={counter}>
				<Routes>
					<Route path="Home" element={<Home />} />
					<Route path="About" element={<About />} />
					<Route path="Contact" element={<Contact />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
}

export default App;
