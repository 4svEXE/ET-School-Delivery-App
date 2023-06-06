import React from "react";
import CustomerForm from "./Cart/CustomerForm";
import Products from "./Cart/Products";
import TotalPayment from "./Cart/TotalPayment";

import CheckoutHelper from "../scripts/helpers/checkoutHelper";

export default function CartPage() {
  const checkoutHelper = new CheckoutHelper();

  return (
    <div className="container p-6 w-full min-h-[80vh] h-[80vh] flex flex-col  justify-between">
      {/* <form onSubmit={checkoutHelper.checkout} method="post" className="container p-6 w-full min-h-[80vh] h-[80vh] flex flex-col  justify-between"> */}
        {/* action="/api/checkout" */}
        <div className="bordered-container flex flex-col lg:grid grid-cols-2 gap-6 w-full p-6 h-[80%]">
          <CustomerForm />

          <Products />
        </div>

        <TotalPayment />
      {/* </form> */}
    </div>
  );
}
