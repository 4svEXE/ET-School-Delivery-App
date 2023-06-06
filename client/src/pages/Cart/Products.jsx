import React, { useState, useEffect } from "react";
import Session from "react-session-api";
import CheckoutHelper from "../../scripts/helpers/checkoutHelper";
import ProductsHelper from "../../scripts/helpers/productsHelper";

import Button from "shared/components/button";
import InputNumber from "shared/components/inputNumber/inputNumber";

import "./LoggetUser.scss";

function Products() {
  const checkoutHelper = new CheckoutHelper();
  const productsHelper = new ProductsHelper();

  const [state, setState] = useState({ products: [] });
  const [rerender, setRerender] = useState(false);
  const [messageToUser, setMessageToUser] = useState(
    "you will be able to order goods when you enter your data"
  );
  const [price, setPrice] = useState({ totalPrice: 0 });

  async function getProducts(productsID) {
    fetch(
      "/api/products?" +
        new URLSearchParams({
          ids: productsID,
        })
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState({ products: data });
      })
      .then((products) => {
        setRerender(!rerender);
      });
  }

  function renderProductsToCart() {
    let productsID = [];
    let cart = Session.get("cart");

    for (const key in cart) {
      if (cart.hasOwnProperty.call(cart, key)) {
        productsID += key + ",";
      }
    }

    getProducts(productsID);
  }

  useEffect(() => {
    renderProductsToCart();
  }, []);

  const [isLoggetUser, setIsLoggetUser] = useState("");
  Session.onSet(function rerenderCartProducts(data) {
    if (Session.get("checkout") != undefined) {
      setIsLoggetUser("logget-user");
    }

    setRerender(!rerender);
    setPrice({ totalPrice: Session.get("totalPrice") });
  });

  const checkForm = {
    userSessionID: Session.get("userID"),
  };

  const productsForm = {
    userSessionID: Session.get("userID"),
    shopID: Session.get("shopID"),
    products: Session.get("cart"),
  };

  let total = 0;

  return (
    <form
      onSubmit={(event) =>
        checkoutHelper.createCheck(event, checkForm, productsForm)
      }
      className={
        "bordered-container w-full p-6 flex-col h-full overflow-y-scroll " +
        isLoggetUser
      }
    >
      <h4 className="text-3xl">{messageToUser}</h4>
      {state.products.length > 0 && (
        <div className="flex flex-col">
          {state.products.map((product, i) => (
            <div
              key={i}
              className={"bordered-container flex flex-row p-6 my-3 "}
            >
              <div className="hidden">
                {" "}
                {
                  (total +=
                    product.price * productsHelper.getProductCount(product._id))
                }
              </div>

              <img width="20%" src={product.image} alt={product.title} />

              <div className="w-full flex flex-col justify-between my-6">
                <h5>{product.title}</h5>
                <strong>{product.price} грн</strong>
              </div>

              <InputNumber
                value={productsHelper.getProductCount(product._id)}
                onDecrement={(event) => {
                  event.preventDefault();
                  productsHelper.reCountProductInCart(product._id, -1);
                  setRerender(!rerender);
                }}
                onIncrement={(event) => {
                  event.preventDefault();
                  productsHelper.reCountProductInCart(product._id, +1);
                  setRerender(!rerender);
                }}
              />

              <Button
                onClick={() => console.log("Product")}
                title="Delete"
                className="ml-6"
              />
            </div>
          ))}

          <Button
            title="Save"
            type={isLoggetUser ? "submit" : "button" + isLoggetUser}
            disabled={total <= 0 ? "disabled" : ""}
            onClick={() => {
              setTimeout(() => {
                if (Session.get("user") != undefined) {
                  setIsLoggetUser("logget-user");
                  setMessageToUser("Your order has been accepted!");
                } else {
                  setMessageToUser("You must enter your data");
                }
                setRerender(!rerender);
              }, 1000);
            }}
          />
        </div>
      )}

      {state.products.length <= 0 && (
        <h4 className="text-3xl">There are no products here!</h4>
      )}

      <p className="text-4xl my-6">
        Total: <strong>{total}грн</strong>
      </p>
    </form>
  );
}

export default Products;
