const Admin = require("../models/Admin");

exports.loginAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful", admin: { username: admin.username } });
  } catch (err) {
    next(err);
  }
};
