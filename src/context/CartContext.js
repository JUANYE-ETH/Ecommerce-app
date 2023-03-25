import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		console.log("Adding to cart:", item);
		const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

		if (existingItem) {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...existingItem, quantity: existingItem.quantity + 1 }
						: cartItem
				)
			);
		} else {
			setCartItems([...cartItems, { ...item, quantity: 1 }]);
		}
	};

	const removeFromCart = (itemId, action = "decrement") => {
		const existingItem = cartItems.find((cartItem) => cartItem.id === itemId);

		if (action === "decrement") {
			if (existingItem.quantity === 1) {
				setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
			} else {
				setCartItems(
					cartItems.map((cartItem) =>
						cartItem.id === itemId
							? { ...existingItem, quantity: existingItem.quantity - 1 }
							: cartItem
					)
				);
			}
		} else if (action === "increment") {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === itemId
						? { ...existingItem, quantity: existingItem.quantity + 1 }
						: cartItem
				)
			);
		} else if (action === "remove") {
			setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
		}
	};

	const clearCart = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
