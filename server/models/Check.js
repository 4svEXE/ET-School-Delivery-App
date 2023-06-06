const { Schema, model } = require("mongoose");

const schema = new Schema({
  userSession: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

module.exports = model("checks", schema);
