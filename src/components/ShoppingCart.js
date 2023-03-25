import React, { useContext } from "react";
import "../styles/ShoppingCart.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
	const { cartItems, removeFromCart } = useContext(CartContext);
	const navigate = useNavigate();

	const handleRemove = (itemId) => {
		removeFromCart(itemId, "remove");
	};

	const cartTotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const handleCheckout = () => {
		navigate("/checkout");
	};

	return (
		<div className="site-content">
			<div className="shopping-cart">
				<h2>Shopping Cart</h2>
				<div className="cart-items">
					{cartItems.map((item) => (
						<div key={item.id} className="cart-item">
							<img src={item.image} alt={item.name} />
							<div className="item-info">
								<h3>{item.name}</h3>
								<p>${item.price}</p>
							</div>
							<div className="item-quantity">
								<button onClick={() => removeFromCart(item.id, "decrement")}>
									-
								</button>
								<input type="number" value={item.quantity} readOnly />
								<button onClick={() => removeFromCart(item.id, "increment")}>
									+
								</button>
							</div>
							<button
								className="remove-item"
								onClick={() => handleRemove(item.id)}
							>
								Remove
							</button>
						</div>
					))}
				</div>
				<div className="cart-summary">
					<h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
					<button onClick={handleCheckout}>Proceed to Checkout</button>
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;
