// Switch to the appropriate database
db = db.getSiblingDB('cloth_shop');

// Categories
const categories = [
	{
		_id: ObjectId(),
		name: "Clothing",
		image: "https://example.com/clothing.jpg"
	},
	{
		_id: ObjectId(),
		name: "Accessories",
		image: "https://example.com/accessories.jpg"
	},
	{
		_id: ObjectId(),
		name: "Footwear",
		image: "https://example.com/footwear.jpg"
	},
	{
		_id: ObjectId(),
		name: "Electronics",
		image: "https://example.com/electronics.jpg"
	},
	{
		_id: ObjectId(),
		name: "Home Goods",
		image: "https://example.com/home_goods.jpg"
	}
];

// Subcategories (each category will have between 1 to 3 subcategories)
const subcategories = [
	// Clothing
	[
		{ _id: ObjectId(), name: "T-Shirts", category_id: categories[0]._id, image: "https://example.com/tshirts.jpg" },
		{ _id: ObjectId(), name: "Jeans", category_id: categories[0]._id, image: "https://example.com/jeans.jpg" },
	],
	// Accessories
	[
		{ _id: ObjectId(), name: "Hats", category_id: categories[1]._id, image: "https://example.com/hats.jpg" },
	],
	// Footwear
	[
		{ _id: ObjectId(), name: "Sneakers", category_id: categories[2]._id, image: "https://example.com/sneakers.jpg" },
		{ _id: ObjectId(), name: "Boots", category_id: categories[2]._id, image: "https://example.com/boots.jpg" },
		{ _id: ObjectId(), name: "Sandals", category_id: categories[2]._id, image: "https://example.com/sandals.jpg" }
	],
	// Electronics
	[
		{ _id: ObjectId(), name: "Laptops", category_id: categories[3]._id, image: "https://example.com/laptops.jpg" },
		{ _id: ObjectId(), name: "Smartphones", category_id: categories[3]._id, image: "https://example.com/smartphones.jpg" }
	],
	// Home Goods
	[
		{ _id: ObjectId(), name: "Furniture", category_id: categories[4]._id, image: "https://example.com/furniture.jpg" },
		{ _id: ObjectId(), name: "Kitchenware", category_id: categories[4]._id, image: "https://example.com/kitchenware.jpg" },
	]
];

// Products (Each subcategory will have between 1 to 5 products)
const products = [
	// T-Shirts (Clothing)
	[
		{ _id: ObjectId(), name: "Basic T-Shirt", description: "A comfortable and stylish t-shirt.", price: 19.99, in_stock: true, category_id: categories[0]._id, subcategory_id: subcategories[0][0]._id, sizes: ["S", "M", "L", "XL"], colors: ["Red", "Blue", "Black"], discount: "10%", is_new: true, is_favorite: false, quantity: 200, discounted_price: 17.99, has_size: true },
		{ _id: ObjectId(), name: "Graphic Tee", description: "A trendy graphic t-shirt.", price: 24.99, in_stock: true, category_id: categories[0]._id, subcategory_id: subcategories[0][0]._id, sizes: ["M", "L"], colors: ["White", "Gray"], discount: "15%", is_new: false, is_favorite: true, quantity: 100, discounted_price: 21.24, has_size: true }
	],
	// Jeans (Clothing)
	[
		{ _id: ObjectId(), name: "Slim Fit Jeans", description: "Comfortable slim fit jeans.", price: 39.99, in_stock: true, category_id: categories[0]._id, subcategory_id: subcategories[0][1]._id, sizes: ["30", "32", "34"], colors: ["Blue", "Black"], discount: "5%", is_new: false, is_favorite: true, quantity: 150, discounted_price: 37.99, has_size: true }
	],
	// Hats (Accessories)
	[
		{ _id: ObjectId(), name: "Baseball Cap", description: "A stylish baseball cap.", price: 19.99, in_stock: true, category_id: categories[1]._id, subcategory_id: subcategories[1][0]._id, sizes: [], colors: ["Black", "Red"], discount: "0%", is_new: true, is_favorite: false, quantity: 50, discounted_price: 19.99, has_size: false }
	],
	// Sneakers (Footwear)
	[
		{ _id: ObjectId(), name: "Running Sneakers", description: "Lightweight sneakers for running.", price: 49.99, in_stock: true, category_id: categories[2]._id, subcategory_id: subcategories[2][0]._id, sizes: ["8", "9", "10"], colors: ["Black", "White"], discount: "20%", is_new: true, is_favorite: true, quantity: 300, discounted_price: 39.99, has_size: true },
		{ _id: ObjectId(), name: "Casual Sneakers", description: "Casual sneakers for daily wear.", price: 59.99, in_stock: true, category_id: categories[2]._id, subcategory_id: subcategories[2][0]._id, sizes: ["7", "8", "9"], colors: ["Gray", "Navy"], discount: "10%", is_new: false, is_favorite: false, quantity: 150, discounted_price: 53.99, has_size: true }
	],
	// Laptops (Electronics)
	[
		{ _id: ObjectId(), name: "Laptop Pro", description: "High-performance laptop for professionals.", price: 999.99, in_stock: true, category_id: categories[3]._id, subcategory_id: subcategories[3][0]._id, sizes: [], colors: ["Silver", "Black"], discount: "5%", is_new: true, is_favorite: false, quantity: 50, discounted_price: 949.99, has_size: false }
	],
	// Furniture (Home Goods)
	[
		{ _id: ObjectId(), name: "Office Desk", description: "A stylish office desk.", price: 199.99, in_stock: true, category_id: categories[4]._id, subcategory_id: subcategories[4][0]._id, sizes: [], colors: ["Brown", "Black"], discount: "15%", is_new: true, is_favorite: false, quantity: 30, discounted_price: 169.99, has_size: false },
		{ _id: ObjectId(), name: "Bookshelf", description: "A modern bookshelf.", price: 149.99, in_stock: true, category_id: categories[4]._id, subcategory_id: subcategories[4][0]._id, sizes: [], colors: ["White", "Gray"], discount: "10%", is_new: false, is_favorite: true, quantity: 75, discounted_price: 134.99, has_size: false }
	]
];

// Insert data into the collections
db.categories.insertMany(categories);
subcategories.forEach(subcategoryList => {
	db.subcategories.insertMany(subcategoryList);
});
products.forEach(productList => {
	db.products.insertMany(productList);
});
