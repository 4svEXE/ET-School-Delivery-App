import React from "react";
import s from "./Shop.module.scss";
import Shops from "./Shop/Shops";
import Products from "./Shop/Products";

export default function ShopPage() {
  

  return (
    <div className="container p-6 w-full min-h-[80vh] h-[80vh] flex justify-between">
      <Shops />

      <Products />

    </div>
  );
}
