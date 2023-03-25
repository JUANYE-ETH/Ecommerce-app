import axios from "axios";
// const products = [
// 	{
// 		id: 1,
// 		name: "Product 1",
// 		description: "This is a sample product.",
// 		price: 49.99,
// 		image: "https://via.placeholder.com/200",
// 	},
// 	{
// 		id: 2,
// 		name: "Product 2",
// 		description: "This is another sample product.",
// 		price: 99.99,
// 		image: "https://via.placeholder.com/200",
// 	},
// 	{
// 		id: 3,
// 		name: "Product 3",
// 		description: "This is another sample product.",
// 		price: 79.99,
// 		image: "https://via.placeholder.com/200",
// 	},
// 	{
// 		id: 4,
// 		name: "Product 4",
// 		description: "This is another sample product.",
// 		price: 9.99,
// 		image: "https://via.placeholder.com/200",
// 	},
// 	{
// 		id: 5,
// 		name: "Product 5",
// 		description: "This is another sample product.",
// 		price: 39.99,
// 		image: "https://via.placeholder.com/200",
// 	},
// 	{
// 		id: 6,
// 		name: "Product 6",
// 		description: "This is another sample product.",
// 		price: 999.99,
// 		image: "https://via.placeholder.com/200",
// 	},
// 	{
// 		id: 7,
// 		name: "Product 7",
// 		description: "This is another sample product.",
// 		price: 7.99,
// 		image: "https://via.placeholder.com/200",
// 	},
// 	{
// 		id: 8,
// 		name: "Product 8",
// 		description: "This is another sample product.",
// 		price: 88.99,
// 		image: "https://via.placeholder.com/200",
// 	},
// ];

// const apiClient = {
// 	getProducts: () => Promise.resolve(products),
// };

const apiClient = axios.create({
	baseURL: "https://fakestoreapi.com",
	timeout: 20000,
});

const getBanners = async () => {
	try {
		const response = await apiClient.get("/products");
		const products = response.data;
		return products.slice(0, 3);
	} catch (error) {
		console.error("Failed to fetch banners:", error);
	}
};

export default apiClient;
export { getBanners };
