import React from "react";
import "../styles/Home.css";
import FeaturedProducts from "./FeaturedProducts";
import { Carousel } from "react-responsive-carousel";

function Home() {
	return (
		<div className="home">
			<div className="banner">
				<Carousel autoPlay interval={3000} infiniteLoop>
					<div>
						<img src="https://via.placeholder.com/800x300" alt="Banner 1" />
						<p className="legend">Your Image goes here 1</p>
					</div>
					<div>
						<img src="https://via.placeholder.com/800x300" alt="Banner 2" />
						<p className="legend">Your Image goes here 2</p>
					</div>
					<div>
						<img src="https://via.placeholder.com/800x300" alt="Banner 3" />
						<p className="legend">Your Image goes here 3</p>
					</div>
				</Carousel>
			</div>
			<div className="featured-products">
				<FeaturedProducts />
			</div>
			<div className="promotion">
				<h2>Special Promotion</h2>
				<p>
					Get 10% off on your first order! Use the code "WELCOME10" at checkout.
				</p>
			</div>
		</div>
	);
}

export default Home;
