const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    gender: { type: String, required: true },
    dateofbirth: { type: Number, required: false },
    type: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

const User = mongoose.model("user", userSchema); // user => users

module.exports = User;

