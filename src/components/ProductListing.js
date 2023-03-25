import React, { useState, useEffect } from "react";
import "../styles/ProductListing.css";
import apiClient from "../services/api";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function ProductListing() {
	const [products, setProducts] = useState([]);
	const { addToCart } = useContext(CartContext);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await apiClient.get("/products");
				setProducts(response.data);
			} catch (error) {
				console.error("Failed to fetch products:", error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div className="product-listing">
			<h2>Products</h2>
			<div className="products">
				{products.map((product) => (
					<div key={product.id} className="product-card">
						<img src={product.image} alt={product.name} />
						<h3>{product.name}</h3>
						<div className="product-description">
							{product.description}
						</div>{" "}
						<p>${product.price}</p>
						<button onClick={() => addToCart(product)}>Add to Cart</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default ProductListing;
