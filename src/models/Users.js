const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nationality: { type: String, required: true },
  voted: { type: Boolean, default: false },
});

module.exports = model("User", UserSchema);
