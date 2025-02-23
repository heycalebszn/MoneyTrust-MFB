const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true},
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  otp: { type: String, required: false },
  otpExpires: { type: Date, required: false },
});

module.exports = mongoose.model("User", UserSchema);