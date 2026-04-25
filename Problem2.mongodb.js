// 1. Add one patient
db.patients.insertOne({
  patientName: "Ravi",
  age: 45,
  disease: "Diabetes",
  doctor: "Dr. Sharma",
  admissionStatus: "Admitted"
});

// 2. Add multiple patients
db.patients.insertMany([
  { patientName: "Meena", age: 30, disease: "Dengue", doctor: "Dr. Iyer", admissionStatus: "Admitted" },
  { patientName: "Rahul", age: 4, disease: "Flu", doctor: "Dr. Singh", admissionStatus: "Admitted" },
  { patientName: "Sita", age: 65, disease: "Arthritis", doctor: "Dr. Patel", admissionStatus: "Discharged" },
  { patientName: "Amit", age: 3, disease: "Flu", doctor: "Dr. Reddy", admissionStatus: "Admitted" },
  { patientName: "John", age: 70, disease: "Heart Condition", doctor: "Dr. Verma", admissionStatus: "Admitted" }
]);

// 3. Discharge Meena
db.patients.updateOne(
  { patientName: "Meena" },
  { $set: { admissionStatus: "Discharged" } }
);

// 4. Give all Flu patients to Dr. Kumar
db.patients.updateMany(
  { disease: "Flu" },
  { $set: { doctor: "Dr. Kumar" } }
);

// 5a. Delete patients younger than 5
db.patients.deleteMany({ age: { $lt: 5 } });

// 5b. Show me the patients older than 60
db.patients.find({ age: { $gt: 60 } });
