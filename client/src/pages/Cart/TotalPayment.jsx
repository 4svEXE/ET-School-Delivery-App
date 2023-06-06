import React, { useState, useEffect } from "react";
import Session from "react-session-api";
import Button from "shared/components/button";

import CheckoutHelper from "../../scripts/helpers/checkoutHelper";

function TotalPayment() {
  // const checkoutHelper = new CheckoutHelper();

  // const [state, setState] = useState({ products: [] });
  // const [price, setPrice] = useState({ totalPrice: 200 });

  // const [rerender, setRerender] = useState(false);

  // async function getProducts(productsID) {
  //   fetch(
  //     "/api/products?" +
  //       new URLSearchParams({
  //         ids: productsID,
  //       })
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setState({ products: data });
  //     });
  // }

  // async function renderProductsToCart() {
  //   let productsID = [];
  //   let cart = Session.get("cart");

  //   for (const key in cart) {
  //     productsID += key + ",";
  //   }

  //   fetch(
  //     "/api/products?" +
  //       new URLSearchParams({
  //         ids: productsID,
  //       })
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setState({ products: data });
  //     });
  // }

  // function getProductCount(productID) {
  //   let cart = Session.get("cart");

  //   if (cart) {
  //     return cart[productID]?.count;
  //   }
  //   //return 0;
  // }

  // function getTotalPrice() {
  //   let total = 10;

  //   console.log("state.products", state.products);

  //   state.products.map((product) => {
  //     total += product.price * getProductCount(product._id);
  //     console.log("total", total);
  //   });

  //   setPrice({ totalPrice: total });
  //   return total;
  // }

  // Session.onSet(function renderTotalPayment(data) {
  //   renderProductsToCart();

  //   console.log("Session.onSet", getTotalPrice());
  //   setPrice({ totalPrice: getTotalPrice() });
  // });

  // useEffect(() => {
  //   renderProductsToCart();
  //   setPrice({ totalPrice: getTotalPrice() });
  // }, []);

  return (
    <div className="bordered-container w-full p-6 flex justify-end">
      {/* <div className="flex justify-end w-full">
        {rerender.rerender ? "Rerender" : "rerender2"}

        <p className="text-3xl mr-6">
          Total price <strong> {price.totalPrice}грн</strong>
        </p>

        <Button title="Submit" />
      </div> */}
    </div>
  );
}

export default TotalPayment;
