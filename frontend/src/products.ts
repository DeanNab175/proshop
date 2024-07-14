export type ProductType = {
	_id: string;
	name: string;
	image: string;
	description: string;
	brand: string;
	category: string;
	price: number;
	countInStock: number;
	rating: number;
	numReviews: number;
};

const products = [
	{
		_id: "1",
		name: "Airpods Wireless Bluetooth Headphones",
		image: "images/airpods.jpg",
		description: "Bluetooth technology...",
		brand: "Apple",
		category: "Electronics",
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		_id: "2",
		name: "iPhone 11",
		image: "images/phone.jpg",
		description: "iPhone 11 technology...",
		brand: "Apple",
		category: "Electronics",
		price: 199.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
];

export default products;
