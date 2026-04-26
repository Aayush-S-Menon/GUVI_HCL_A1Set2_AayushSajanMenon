// 1. Add shipment records
db.shipments.insertMany([
  { shipmentId: "SHP001", source: "Mumbai", destination: "Delhi", weight: 50, deliveryStatus: "Delivered" },
  { shipmentId: "SHP002", source: "Chennai", destination: "Bangalore", weight: 20, deliveryStatus: "In Transit" },
  { shipmentId: "SHP003", source: "Mumbai", destination: "Pune", weight: 15, deliveryStatus: "Pending" }
]);

// 2. Create an index for shipmentId
db.shipments.createIndex({ shipmentId: 1 });

// 3. Create a compound index (for two things at once)
db.shipments.createIndex({ source: 1, destination: 1 });

// 4. Analyze the search
db.shipments.find({ source: "Mumbai" }).explain("executionStats");