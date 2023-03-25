import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import apiClient from "../services/api";

function ProductDetails() {
	const [product, setProduct] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await apiClient.get(`/products/${id}`);
				setProduct(response.data);
			} catch (error) {
				console.error("Failed to fetch product:", error);
			}
		};

		fetchProduct();
	}, [id]);

	return (
		<div className="product-details">
			{product && (
				<>
					<div className="product-images">{/* Display product images */}</div>
					<div className="product-info">
						<h2>{product.name}</h2>
						<p>{product.description}</p>
						<p>${product.price}</p>
						<button>Add to Cart</button>
					</div>
				</>
			)}
		</div>
	);
}

export default ProductDetails;
