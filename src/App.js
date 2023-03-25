import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import { CartContextProvider } from "./context/CartContext";
import "./styles/App.css";

function App() {
	return (
		<CartContextProvider>
			<Router>
				<div className="app-container">
					<Header />
					<div className="site-content">
						<main>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/products" element={<ProductListing />} />
								<Route path="/product/:id" element={<ProductDetails />} />
								<Route path="/cart" element={<ShoppingCart />} />
								<Route path="/checkout" element={<Checkout />} />
								<Route path="/about" element={<About />} />
							</Routes>
						</main>
					</div>
					<Footer />
				</div>
			</Router>
		</CartContextProvider>
	);
}

export default App;
