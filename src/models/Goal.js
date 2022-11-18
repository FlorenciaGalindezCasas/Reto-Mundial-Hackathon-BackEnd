const { Schema, model } = require("mongoose");

const GoalSchema = new Schema({
  done: { type: [Number] },
  received: { type: [Number] },
});

module.exports = model("Goal", GoalSchema);
