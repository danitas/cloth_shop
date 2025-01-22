db = db.getSiblingDB('cloth_shop');

db.products.insertMany([
	{
		name: "Product 1",
		price: 19.99,
		description: "Description for Product 1",
		stock: 100
	},
	{
		name: "Product 2",
		price: 29.99,
		description: "Description for Product 2",
		stock: 50
	}
]);