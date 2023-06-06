import React, { useState, useEffect } from "react";
import Session from "react-session-api";

import ProductsHelper from "../../scripts/helpers/productsHelper";

import Button from "shared/components/button";
import InputNumber from "shared/components/inputNumber/inputNumber";

export default function Products() {
  const productsHelper = new ProductsHelper();

  const [state, setState] = useState({ products: [] });
  const [rerender, setRerender] = useState(false);

  async function getProducts(shop_id) {
    fetch(
      "/api/shopProducts?" +
        new URLSearchParams({
          id: shop_id,
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

  useEffect(() => {
    getProducts(Session.get("shopID"));

    Session.onSet(function rerenderShopProducts(data) {
      getProducts(Session.get("shopID"));
      setRerender(!rerender);
    });
  }, []);

  return (
    <div className="bordered-container h-full w-[70%] overflow-y-scroll">
      <h3 className="text-3xl p-10">
        {state?.products[0]?.shopTitle || "Choise the products"}
      </h3>

      {state.products.length > 0 && (
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
          {state.products.map((product) => (
            <div
              key={product._id}
              className={
                "bordered-container flex flex-col p-6 " +
                (product.isAviable ? "" : "opacity-50 pointer-events-none")
              }
            >
              <img width="50%" src={product.image} alt={product.title} />

              <div className="w-full flex justify-between my-6">
                <h5>{product.title}</h5>
                <strong>{product.price} грн</strong>
              </div>

              <p className="w-full mb-6">{product.description}</p>

              <InputNumber
                value={productsHelper.getProductCount(product._id)}
                onDecrement={() => {
                  productsHelper.reCountProductInCart(product._id, -1);
                }}
                onIncrement={() => {
                  productsHelper.reCountProductInCart(product._id, +1);
                }}
              />

              <Button
                title="Add to cart"
                onClick={() => {
                  alert("addet");
                }}
                className="my-6 w-full"
              />
            </div>
          ))}
        </div>
      )}

      {state.products.length <= 0 && <div>Select the shop!</div>}
    </div>
  );
}
