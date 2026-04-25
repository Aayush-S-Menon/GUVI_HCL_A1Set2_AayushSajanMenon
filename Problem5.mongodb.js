// 1. Add retail store records
db.retail.insertMany([
  { product: "Laptop", category: "Electronics", sales: 50000, storeLocation: "Mumbai" },
  { product: "Smartphone", category: "Electronics", sales: 25000, storeLocation: "Delhi" },
  { product: "T-Shirt", category: "Clothing", sales: 1500, storeLocation: "Mumbai" },
  { product: "Jeans", category: "Clothing", sales: 3000, storeLocation: "Bangalore" },
  { product: "Refrigerator", category: "Appliances", sales: 40000, storeLocation: "Delhi" },
  { product: "Microwave", category: "Appliances", sales: 12000, storeLocation: "Mumbai" },
  { product: "Headphones", category: "Electronics", sales: 11000, storeLocation: "Bangalore" }
]);

// 2. Calculate total sales across all products
db.retail.aggregate([
  { $group: { _id: null, totalSales: { $sum: "$sales" } } }
]);

// 3. Find average sales per category
db.retail.aggregate([
  { $group: { _id: "$category", averageSales: { $avg: "$sales" } } }
]);

// 4. Group by storeLocation and count the number of sales
db.retail.aggregate([
  { $group: { _id: "$storeLocation", numberOfSales: { $sum: 1 } } }
]);

// 5. Display top 3 categories with highest sales (filtering for sales > 10000 first)
db.retail.aggregate([
  { $match: { sales: { $gt: 10000 } } },
  { $group: { _id: "$category", totalSales: { $sum: "$sales" } } },
  { $sort: { totalSales: -1 } },
  { $limit: 3 }
]);
