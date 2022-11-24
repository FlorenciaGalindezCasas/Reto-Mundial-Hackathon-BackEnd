const { Schema, model, Types } = require("mongoose");

const CountrieSchema = new Schema({
  name: {
    type: String,
    required: true, unique: true
  },
  fase1: { type: Types.ObjectId, ref: "goal" },
  octavos: { type: Types.ObjectId, ref: "goal" },
  cuartos: { type: Types.ObjectId, ref: "goal" },
  semifinal: { type: Types.ObjectId, ref: "goal" },
  final: { type: Types.ObjectId, ref: "goal" },
  campeon: { type: Types.ObjectId, ref: "goal" }
});

module.exports = model("Countries", CountrieSchema);
