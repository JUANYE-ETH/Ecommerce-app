import React, { useState, useRef, useContext } from "react";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
	const [customerInfo, setCustomerInfo] = useState({});
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();
	const formRef = useRef(null);
	const { clearCart } = useContext(CartContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setShowModal(true);
		clearCart();
		formRef.current.reset();
		setTimeout(() => {
			setShowModal(false);
			navigate("/");
		}, 3000);
	};

	const handleChange = (event) => {
		setCustomerInfo({
			...customerInfo,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div className="site-content">
			<div className="checkout">
				<h2>Checkout</h2>
				<form ref={formRef} onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Full Name:</label>
						<input
							type="text"
							id="name"
							name="name"
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							onChange={handleChange}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="address">Shipping Address:</label>
						<input
							type="text"
							id="address"
							name="address"
							onChange={handleChange}
							required
						/>
					</div>
					<button type="submit">Place Order</button>
				</form>
				{showModal && (
					<div className="modal">
						<p>Your order was placed. Thanks for your order!</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Checkout;
