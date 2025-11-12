const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  childName: { type: String, required: true },
  childBirthday: { type: Date, required: true },
  mainProgram: { type: String, enum: ["Preschool", "Learning Course"], required: true },
  availableClass: { type: String },

  parentName: { type: String, required: true },
  email: { type: String, required: true },
  whatsapp: { type: String, required: true },
  notes: { type: String },

}, { timestamps: true });

module.exports = mongoose.model("Enrollment", enrollmentSchema);
