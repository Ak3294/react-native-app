const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  landmark: { type: String, required: true },
  region: { type: String, required: true },
  state: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
