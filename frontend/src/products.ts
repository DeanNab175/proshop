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
		name: "iPhone 11 Pro 256GB Memory",
		image: "images/phone.jpg",
		description: "iPhone 11 technology...",
		brand: "Apple",
		category: "Electronics",
		price: 599.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		_id: "3",
		name: "Cannon EOS 80D DSLR Camera",
		image: "images/camera.jpg",
		description: "Cannon EOS 80D DSLR Camera technology...",
		brand: "Cannon",
		category: "Electronics",
		price: 929.99,
		countInStock: 10,
		rating: 4.7,
		numReviews: 13,
	},
	{
		_id: "4",
		name: "Sony Playstation 4 Pro White Version",
		image: "images/playstation.jpg",
		description: "Sony Playstation 4 Pro technology...",
		brand: "Sony",
		category: "Electronics",
		price: 399.99,
		countInStock: 5,
		rating: 4.2,
		numReviews: 16,
	},
	{
		_id: "5",
		name: "Logitech G-Series Gaming Mouse",
		image: "images/mouse.jpg",
		description: "Logitech G-Series Gaming Mouse technology...",
		brand: "Logitech",
		category: "Electronics",
		price: 49.99,
		countInStock: 15,
		rating: 3.0,
		numReviews: 2,
	},
	{
		_id: "6",
		name: "Amazon Echo Dot 3rd Generation",
		image: "images/alexa.jpg",
		description: "Amazon Echo Dot 3rd Generation technology...",
		brand: "Amazon",
		category: "Electronics",
		price: 29.99,
		countInStock: 18,
		rating: 3.9,
		numReviews: 23,
	},
];

export default products;
