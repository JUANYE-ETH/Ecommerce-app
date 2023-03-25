import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/HamburgerMenu.css";

function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const menuStyle = {
		display: isOpen ? "block" : "none",
	};

	return (
		<>
			<button className="hamburger" onClick={toggleMenu}>
				<span className="hamburger-line"></span>
				<span className="hamburger-line"></span>
				<span className="hamburger-line"></span>
			</button>
			<nav className="mobile-nav" style={menuStyle}>
				<ul>
					<li>
						<NavLink to="/" onClick={toggleMenu}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/products" onClick={toggleMenu}>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" onClick={toggleMenu}>
							About
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default HamburgerMenu;
