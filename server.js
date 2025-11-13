require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const contactRoutes = require("./routes/ContactRoutes");
const enrollmentRoutes = require("./routes/EnrollmentRoutes");
const galleryRoutes = require("./routes/GalleryRoutes");
const paymentRoutes = require("./routes/PaymentRoutes");
const testimonyRoutes = require("./routes/TestimonyRoutes");
const adminRoutes = require("./routes/AdminRoutes");

app.use("/api/contact", contactRoutes);
app.use("/api/enroll", enrollmentRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/testimony", testimonyRoutes);
app.use("/api/admin", adminRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
