const mongoose = require("mongoose");

const testimonySchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  role: { type: String }, 
  rating: { type: Number, default: 5 },
}, { timestamps: true });

module.exports = mongoose.model("Testimony", testimonySchema);
