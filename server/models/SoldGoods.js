const { Schema, model } = require('mongoose');

const schema = new Schema({
  userSession: {
    type: String,
    required: true
  },
  productID: {
    type: String,
    required: true
  },
  checkID: {
    type: String,
    required: true
  },
  SoldGoods: {
    type: String,
    required: true
  },
  productsCount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
});

module.exports = model('soldGoods', schema);