import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
	const { cartItems } = useContext(CartContext);
	const totalItems = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	);

	return (
		<header className="header">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="Your Store Logo" />
				</Link>
			</div>
			<nav className="main-nav">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			<HamburgerMenu />
			<div className="cart-search">
				<Link to="/cart" className="cart-icon">
					<i className="fas fa-shopping-cart"></i>
					{totalItems > 0 && <span className="cart-count">({totalItems})</span>}
				</Link>
			</div>
		</header>
	);
}

export default Header;
