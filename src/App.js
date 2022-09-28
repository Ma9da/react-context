import React, { useState } from "react";
import "./App.css";
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
	const decrement = () => {
		setCounter(counter - 1);
	};
	return (
		<>
			<div className="navbar">
				<ul className="navbar__links">
					<li>
						<Link to="Home">Home</Link>
					</li>
					<li>
						<Link to="About">About</Link>
					</li>
					<li>
						<Link to="Contact">Contact</Link>
					</li>
				</ul>
				<button className="nav-notification count">{counter}</button>
				<button className="nav-notification add" onClick={increment}>
					+
				</button>
				<button className="nav-notification minus" onClick={decrement}>
					-
				</button>
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
