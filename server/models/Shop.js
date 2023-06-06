const { Schema, model } = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  isAviable: {
    type: Boolean,
    required: true,
  },
});

module.exports = model("shops", schema);
