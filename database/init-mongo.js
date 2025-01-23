// Switch to the appropriate database
import cowbooties from "../frontend/src/assets/images/category/cowbboots.jpg";
import partyShoes from "../frontend/src/assets/images/category/chownyky.jpg";
import kneeBoots from "../frontend/src/assets/images/category/boots.jpg";
import sandals from "../frontend/src/assets/images/category/bosonijki.jpg";
import ankleBoots from "../frontend/src/assets/images/category/boots-12-botil-24.jpg";
import boots from "../frontend/src/assets/images/category/boots12-24.jpg";
import loafers from "../frontend/src/assets/images/category/loafers-24-09.jpg";
import balletFlat from "../frontend/src/assets/images/category/bosbaletky-24-09.jpg";
import cowboyBoots from "../frontend/src/assets/images/category/kowboy09.jpg";
import mules from "../frontend/src/assets/images/category/myli-24-09.jpg";
import sneakers from "../frontend/src/assets/images/category/keds-1-24.jpg";
import slides from "../frontend/src/assets/images/category/slopanci-6-24.jpg";

db = db.getSiblingDB('cloth_shop');

// Categories
const categories = [
	{
		_id: ObjectId(),
		name: "Clothing",
	},
	{
		_id: ObjectId(),
		name: "Accessories",
	},
	{
		_id: ObjectId(),
		name: "Footwear",
	},
	{
		_id: ObjectId(),
		name: "Electronics",
	},
	{
		_id: ObjectId(),
		name: "Home Goods",
	},
	{
		_id: ObjectId(),
		name: "Shoes",
	}
];

// Subcategories (each category will have between 1 to 3 subcategories)
const subcategories = [
	// Clothing
	[
		{_id: ObjectId(), name: "Cowbooties", category_id: categories[0]._id, image: "https://example.com/tshirts.jpg"},
		{_id: ObjectId(), name: "Jeans", category_id: categories[0]._id, image: "https://example.com/jeans.jpg"},
	],
	// Accessories
	[
		{_id: ObjectId(), name: "Hats", category_id: categories[1]._id, image: "https://example.com/hats.jpg"},
	],
	// Footwear
	[
		{_id: ObjectId(), name: "Sneakers", category_id: categories[2]._id, image: "https://example.com/sneakers.jpg"},
		{_id: ObjectId(), name: "Boots", category_id: categories[2]._id, image: "https://example.com/boots.jpg"},
		{_id: ObjectId(), name: "Sandals", category_id: categories[2]._id, image: "https://example.com/sandals.jpg"}
	],
	// Electronics
	[
		{_id: ObjectId(), name: "Laptops", category_id: categories[3]._id, image: "https://example.com/laptops.jpg"},
		{_id: ObjectId(), name: "Smartphones", category_id: categories[3]._id, image: "https://example.com/smartphones.jpg"}
	],
	// Home Goods
	[
		{_id: ObjectId(), name: "Furniture", category_id: categories[4]._id, image: "https://example.com/furniture.jpg"},
		{
			_id: ObjectId(),
			name: "Kitchenware",
			category_id: categories[4]._id,
			image: "https://example.com/kitchenware.jpg"
		},
	],
	[
		{ _id: ObjectId(), name: 'Cowbooties', category_id: categories[5]._id, image: "cowbboots.jpg" },
		{ _id: ObjectId(), name: 'Party Shoes', category_id: categories[5]._id, image: "chownyky.jpg" },
		{ _id: ObjectId(), name: 'Knee boots', category_id: categories[5]._id, image: "boots.jpg" },
		{ _id: ObjectId(), name: 'Sandals', category_id: categories[5]._id, image: "bosonijki.jpg" },
		{ _id: ObjectId(), name: 'Ankle boots', category_id: categories[5]._id, image: "boots-12-botil-24.jpg" },
		{ _id: ObjectId(), name: 'Boots', category_id: categories[5]._id, image: "boots12-24.jpg" },
		{ _id: ObjectId(), name: 'Loafers/Oxfords', category_id: categories[5]._id, image: "loafers-24-09.jpg" },
		{ _id: ObjectId(), name: 'Ballet flat', category_id: categories[5]._id, image: "bosbaletky-24-09.jpg" },
		{ _id: ObjectId(), name: 'Cowboy boots', category_id: categories[5]._id, image: "kowboy09.jpg" },
		{ _id: ObjectId(), name: 'Mules/Sabo', category_id: categories[5]._id, image: "myli-24-09.jpg" },
		{ _id: ObjectId(), name: 'Sneakers', category_id: categories[5]._id, image: "keds-1-24.jpg" },
		{ _id: ObjectId(), name: 'Slides', category_id: categories[5]._id, image: "slopanci-6-24.jpg" },
	]
];

// Products (Each subcategory will have between 1 to 5 products)
const products = [
	// T-Shirts (Clothing)
	[
		{
			_id: ObjectId(),
			name: "Basic T-Shirt",
			description: "A comfortable and stylish t-shirt.",
			price: 19.99,
			in_stock: true,
			category_id: categories[0]._id,
			subcategory_id: subcategories[0][0]._id,
			sizes: ["S", "M", "L", "XL"],
			colors: ["Red", "Blue", "Black"],
			discount: "10%",
			is_new: true,
			is_favorite: false,
			quantity: 200,
			discounted_price: 17.99,
			has_size: true
		},
		{
			_id: ObjectId(),
			name: "Graphic Tee",
			description: "A trendy graphic t-shirt.",
			price: 24.99,
			in_stock: true,
			category_id: categories[0]._id,
			subcategory_id: subcategories[0][0]._id,
			sizes: ["M", "L"],
			colors: ["White", "Gray"],
			discount: "15%",
			is_new: false,
			is_favorite: true,
			quantity: 100,
			discounted_price: 21.24,
			has_size: true
		}
	],
	// Jeans (Clothing)
	[
		{
			_id: ObjectId(),
			name: "Slim Fit Jeans",
			description: "Comfortable slim fit jeans.",
			price: 39.99,
			in_stock: true,
			category_id: categories[0]._id,
			subcategory_id: subcategories[0][1]._id,
			sizes: ["30", "32", "34"],
			colors: ["Blue", "Black"],
			discount: "5%",
			is_new: false,
			is_favorite: true,
			quantity: 150,
			discounted_price: 37.99,
			has_size: true
		}
	],
	// Hats (Accessories)
	[
		{
			_id: ObjectId(),
			name: "Baseball Cap",
			description: "A stylish baseball cap.",
			price: 19.99,
			in_stock: true,
			category_id: categories[1]._id,
			subcategory_id: subcategories[1][0]._id,
			sizes: [],
			colors: ["Black", "Red"],
			discount: "0%",
			is_new: true,
			is_favorite: false,
			quantity: 50,
			discounted_price: 19.99,
			has_size: false
		}
	],
	// Sneakers (Footwear)
	[
		{
			_id: ObjectId(),
			name: "Running Sneakers",
			description: "Lightweight sneakers for running.",
			price: 49.99,
			in_stock: true,
			category_id: categories[2]._id,
			subcategory_id: subcategories[2][0]._id,
			sizes: ["8", "9", "10"],
			colors: ["Black", "White"],
			discount: "20%",
			is_new: true,
			is_favorite: true,
			quantity: 300,
			discounted_price: 39.99,
			has_size: true
		},
		{
			_id: ObjectId(),
			name: "Casual Sneakers",
			description: "Casual sneakers for daily wear.",
			price: 59.99,
			in_stock: true,
			category_id: categories[2]._id,
			subcategory_id: subcategories[2][0]._id,
			sizes: ["7", "8", "9"],
			colors: ["Gray", "Navy"],
			discount: "10%",
			is_new: false,
			is_favorite: false,
			quantity: 150,
			discounted_price: 53.99,
			has_size: true
		}
	],
	// Laptops (Electronics)
	[
		{
			_id: ObjectId(),
			name: "Laptop Pro",
			description: "High-performance laptop for professionals.",
			price: 999.99,
			in_stock: true,
			category_id: categories[3]._id,
			subcategory_id: subcategories[3][0]._id,
			sizes: [],
			colors: ["Silver", "Black"],
			discount: "5%",
			is_new: true,
			is_favorite: false,
			quantity: 50,
			discounted_price: 949.99,
			has_size: false
		}
	],
	// Furniture (Home Goods)
	[
		{
			_id: ObjectId(),
			name: "Office Desk",
			description: "A stylish office desk.",
			price: 199.99,
			in_stock: true,
			category_id: categories[4]._id,
			subcategory_id: subcategories[4][0]._id,
			sizes: [],
			colors: ["Brown", "Black"],
			discount: "15%",
			is_new: true,
			is_favorite: false,
			quantity: 30,
			discounted_price: 169.99,
			has_size: false
		},
		{
			_id: ObjectId(),
			name: "Bookshelf",
			description: "A modern bookshelf.",
			price: 149.99,
			in_stock: true,
			category_id: categories[4]._id,
			subcategory_id: subcategories[4][0]._id,
			sizes: [],
			colors: ["White", "Gray"],
			discount: "10%",
			is_new: false,
			is_favorite: true,
			quantity: 75,
			discounted_price: 134.99,
			has_size: false
		}
	],
	// Shoes
	[
		{
			_id: ObjectId(),
			name: 'Rustic Cowbooties',
			price: 899,
			in_stock: true,
			currency: 'USD',
			image: "cowbboots.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][1]._id,
			sizes: ['36', '37', '38'],
			colors: ['Beige', 'Brown', 'Black'],
			discount: '10%',
			is_new: false,
			is_favorite: true,
			quantity: 250,
			discount_price: 400,
			has_size: true,
		},
		{
			_id: ObjectId(),
			name: 'Elite Knee Boots',
			price: 1599,
			currency: 'USD',
			image: "chownyky.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][0]._id,
			sizes: ['39', '40', '41'],
			colors: ['Black', 'Wine', 'Charcoal'],
			discount: '20%',
			is_new: false,
			is_favorite: false,
			quantity: 100,
			discount_price: 400,
			has_size: false,
			in_stock: true,
		},
		{
			_id: ObjectId(),
			name: 'Elite Knee Boots',
			price: 1599,
			currency: 'USD',
			image: "cowbboots.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][2]._id,
			sizes: ['39', '40', '41'],
			colors: ['Black', 'Wine', 'Charcoal'],
			discount: '20%',
			is_new: false,
			is_favorite: false,
			quantity: 100,
			discount_price: 400,
			has_size: true,
			in_stock: true,
		},
		{
			_id: ObjectId(),
			name: 'Comfort Sandals',
			price: 499,
			currency: 'USD',
			image: "myli-24-09.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][3]._id,
			sizes: ['36', '37', '38', '39'],
			colors: ['White', 'Black', 'Tan'],
			discount: '5%',
			is_new: true,
			is_favorite: true,
			quantity: 300,
			discount_price: 400,
			has_size: true,
			in_stock: true,
		},
		{
			_id: ObjectId(),
			name: 'Cozy Ankle Boots',
			price: 899,
			currency: 'USD',
			image: "chownyky.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][4]._id,
			sizes: ['37', '38', '39', '40'],
			colors: ['Olive', 'Black', 'Beige'],
			discount: '30%',
			is_new: false,
			is_favorite: true,
			quantity: 180,
			discount_price: 400,
			has_size: false,
			in_stock: true,
		},
		{
			_id: ObjectId(),
			name: 'Dynamic Sneakers',
			price: 799,
			currency: 'USD',
			image: "boots.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][5]._id,
			sizes: ['40', '41', '42'],
			colors: ['Red', 'White', 'Gray'],
			discount: '25%',
			is_new: true,
			is_favorite: false,
			quantity: 400,
			discount_price: 400,
			has_size: true,
			in_stock: true,
		},
		{
			_id: ObjectId(),
			name: 'Classic Cowboy Boots',
			price: 1299,
			currency: 'USD',
			image: "bosonijki.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][6]._id,
			sizes: ['42', '43', '44'],
			colors: ['Brown', 'Black', 'Tan'],
			discount: '10%',
			is_new: false,
			is_favorite: true,
			quantity: 220,
			discount_price: 400,
			has_size: false,
			in_stock: true,
		},
		{
			_id: ObjectId(),
			name: 'Elegant Loafers',
			price: 899,
			currency: 'USD',
			image: "loafers-24-09.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][7]._id,
			sizes: ['38', '39', '40'],
			colors: ['Black', 'Navy', 'Brown'],
			discount: '15%',
			is_new: false,
			is_favorite: false,
			quantity: 170,
			discount_price: 400,
			has_size: true,
			in_stock: true,
		},
		{
			_id: ObjectId(),
			name: 'Stylish Mules',
			price: 699,
			currency: 'USD',
			image: "myli-24-09.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][8]._id,
			sizes: ['36', '37', '38'],
			colors: ['White', 'Silver', 'Gold'],
			discount: '12%',
			is_new: true,
			is_favorite: true,
			quantity: 320,
			discount_price: 400,
			has_size: false,
			in_stock: true,
		},
		{
			_id: ObjectId(),
			name: 'Sleek Pumps',
			price: 1299,
			currency: 'USD',
			image: "slopanci-6-24.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][9]._id,
			sizes: ['37', '38', '39'],
			colors: ['Red', 'Black', 'Gold'],
			discount: '20%',
			is_new: false,
			is_favorite: true,
			quantity: 150,
			discount_price: 400,
			has_size: true,
			in_stock: true,
		},
		{
			_id: ObjectId(),
			name: 'Charming Ballet Flats',
			price: 499,
			currency: 'USD',
			image: "bosonijki.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][10]._id,
			sizes: ['36', '37', '38', '39'],
			colors: ['Pink', 'Black', 'White'],
			discount: '5%',
			is_new: true,
			is_favorite: false,
			quantity: 400,
			discount_price: 400,
			has_size: false,
			in_stock: true,
		},
		{
			_id: ObjectId(),
			name: 'Charming Ballet Flats',
			price: 499,
			currency: 'USD',
			image: "bosbaletky-24-09.jpg",
			category_id: categories[5]._id,
			subcategory_id: subcategories[5][11]._id,
			sizes: ['36', '37', '38', '39'],
			colors: ['Pink', 'Black', 'White'],
			discount: '5%',
			is_new: true,
			is_favorite: false,
			quantity: 400,
			discount_price: 400,
			has_size: true,
			in_stock: true,
		},
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
