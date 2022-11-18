const { Schema, model } = require("mongoose");

const CountrieSchema = new Schema({
  name: { type: String, required: true, unique: true },
  votes: [Number],
  done: { type: [Number] },
  received: { type: [Number] },
});

module.exports = model("Countries", CountrieSchema);
