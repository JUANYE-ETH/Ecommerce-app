import React from "react";
import "../styles/Footer.css";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-section">
					<h4>About Us</h4>
					<p>Your e-commerce store description.</p>
				</div>
				<div className="footer-section">
					<h4>Quick Links</h4>
					<ul>
						<li>
							<button className="footer-link">Privacy Policy</button>
						</li>
						<li>
							<button className="footer-link">Terms & Conditions</button>
						</li>
					</ul>
				</div>
				<div className="footer-section">
					<h4>Contact Us</h4>
					<p>123 Main St, City, State, Country</p>
					<p>Email: support@yourstore.com</p>
				</div>
			</div>
			<div className="footer-bottom">
				&copy; {new Date().getFullYear()} Your Store. All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;
