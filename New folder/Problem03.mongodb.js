// 1. Add one bank account
db.accounts.insertOne({
  accountHolderName: "Karthik",
  accountType: "Savings",
  balance: 45000,
  branch: "Chennai",
  status: "Active"
});

// 2. Add multiple bank accounts
db.accounts.insertMany([
  { accountHolderName: "Priya", accountType: "Current", balance: 75000, branch: "Coimbatore", status: "Active" },
  { accountHolderName: "Arun", accountType: "Savings", balance: 12000, branch: "Chennai", status: "Inactive" },
  { accountHolderName: "Sneha", accountType: "Savings", balance: 8000, branch: "Madurai", status: "Active" },
  { accountHolderName: "Vikram", accountType: "Current", balance: 150000, branch: "Coimbatore", status: "Inactive" },
  { accountHolderName: "Anjali", accountType: "Savings", balance: 60000, branch: "Chennai", status: "Inactive" }
]);

// 3. Find accounts with a balance greater than 50,000
db.accounts.find({ balance: { $gt: 50000 } });

// 4. Find Savings accounts with more than 10,000
db.accounts.find({ 
  accountType: "Savings", 
  balance: { $gt: 10000 } 
});

// 5. Find specific inactive accounts and sort them by balance
db.accounts.find({
  status: "Inactive",
  branch: { $in: ["Chennai", "Coimbatore"] }
}).sort({ balance: -1 });
