const { Schema, model } = require('mongoose');

const schema = new Schema({
  session: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
});

// db.products.insert({
//   title: "Icecream3",
//   description: "Icecream3!",
//   price: 332220,
//   image:
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mcdonalds.com%2Fua%2Fuk-ua%2Fproduct%2F200055.html&psig=AOvVaw3-eAyWE3nnTgOX2IfKgFTi&ust=1685992687468000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCv762qqv8CFQAAAAAdAAAAABAE",
//   shopID: "647ca8da8e5fe3fd59f80e86",
//   isAviable: true,
// });

module.exports = model('users', schema);