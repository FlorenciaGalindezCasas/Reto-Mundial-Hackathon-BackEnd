const { Schema, model, Types } = require("mongoose");

const CountrieSchema = new Schema({
  name: { 
    type: String, 
    required: true, unique: true 
  },
  votes: [Number],
  octavos: { 
    type: Boolean, default: false 
  },
  octavosgoals: { 
    type: Types.ObjectId, 
    ref: "goal" 
  },
  cuartos: { 
    type: Boolean, 
    default: false 
  },
  cuartosgoals: { 
    type: Types.ObjectId, 
    ref: "goal" 
  },
  semifinal: { 
    type: Boolean, 
    default: false 
  },
  semifinalgoals: { 
    type: Types.ObjectId, 
    ref: "goal" },
  final: { 
    type: Boolean, 
    default: false 
  },
  finalgoals: { 
    type: Types.ObjectId, 
    ref: "goal" 
  },
});

module.exports = model("Countries", CountrieSchema);
