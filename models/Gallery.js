const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },  
  uploadedBy: { type: String, default: "Admin" }, 
}, { timestamps: true });

module.exports = mongoose.model("Gallery", gallerySchema);
