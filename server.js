const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://LearningApp:LearningApp03@learningappcluster.ylpt9og.mongodb.net/LearningApp')
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ Connection error:', err));

const contactRoutes = require("./routes/ContactRoutes");
const enrollmentRoutes = require("./routes/EnrollmentRoutes");
const galleryRoutes = require("./routes/GalleryRoutes");
const testimonyRoutes = require("./routes/TestimonyRoutes");

app.use("/api/contact", contactRoutes);
app.use("/api/enroll", enrollmentRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/testimony", testimonyRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
