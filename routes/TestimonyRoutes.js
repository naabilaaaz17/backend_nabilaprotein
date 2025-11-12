const express = require("express");
const router = express.Router();
const Testimony = require("../models/Testimony");

router.post("/", async (req, res) => {
  try {
    const testimony = new Testimony(req.body);
    await testimony.save();
    res.status(201).json({ message: "Testimony added!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const testimonies = await Testimony.find();
    res.json(testimonies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
