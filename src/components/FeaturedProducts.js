import React, { useState, useEffect, useContext } from "react";
import apiClient from "../services/api";
import "../styles/FeaturedProducts.css";
import { CartContext } from "../context/CartContext";
function FeaturedProducts() {
	const [products, setProducts] = useState([]);
	const { addToCart } = useContext(CartContext);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await apiClient.get("/products?limit=8");
				setProducts(response.data);
			} catch (error) {
				console.error("Failed to fetch products:", error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div className="products">
			{products.map((product) => (
				<div key={product.id} className="product-card">
					<img src={product.image} alt={product.title} />
					<h3>{product.title}</h3>
					<div className="product-description">{product.description}</div>
					<button onClick={() => addToCart(product)}>Add to Cart</button>
				</div>
			))}
		</div>
	);
}

export default FeaturedProducts;
