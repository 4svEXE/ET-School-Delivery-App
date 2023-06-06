import Session from "react-session-api";

function getProductCount(productID) {
  let cart = Session.get("cart");

  return cart[productID]?.count || 0;
}

function getTotalPrice() {
  let total = 0;

  state.products.map((product) => {
    total += product.price * getProductCount(product._id);
  });

  setPrice({ price: total });

  Session.set("totalPrice", total);
}

function addToCart(productID, count, min = 0, max = 10) {
  let cart = Session.get("cart");

  if (count >= min && count <= max) {
    cart[productID] = {};
    cart[productID].count = count;
    Session.set("cart", cart);
  }
}

function reCountProductInCart(id, num, min = 0, max = 10) {
  addToCart(id, getProductCount(id) + num, min, max);
}

export default class ProductHelper {
  constructor() {
    this.getProductCount = getProductCount;
    this.getTotalPrice = getTotalPrice;
    this.addToCart = addToCart;
    this.reCountProductInCart = reCountProductInCart;
  }
}
