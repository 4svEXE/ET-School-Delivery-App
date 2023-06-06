import React, { useState, useEffect } from "react";
import Session from "react-session-api";
import CheckoutHelper from "../scripts/helpers/checkoutHelper";

function History() {
  const [rerender, setRerender] = useState(false);
  const [history, setHistory] = useState({});
  const checkoutHelper = new CheckoutHelper();

  async function getHistory() {
    checkoutHelper.getHistory(Session.get("user"));
    setHistory(history);
  }

  useEffect(() => {
    getHistory();
    setRerender(!rerender)
  }, []);

  return (
    <div className="">
      <div className="flex w-full bordered m-6">
        {history.length > 0 && (
          <div className="flex flex-col">
            {history.map((product, i) => (
              <div
                key={i}
                className={"bordered-container flex flex-row p-6 my-3 "}
              >
                <div className="flex flex-col">
                  <span className="p-6">
                    checkID : <strong>{product.checkID}</strong>
                  </span>
                  <span className="p-6">
                    productID : <strong>{product.productID}</strong>
                  </span>
                  <span className="p-6">
                    shopID : <strong>{product.shopID}</strong>
                  </span>
                  <span className="p-6">
                    productsCount : <strong>{product.productsCount}</strong>
                  </span>
                  <span className="p-6">
                    userSession : <strong>{product.userSession}</strong>
                  </span>
                  <span className="p-6">
                    createdAt : <strong>{product.createdAt}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <button
        onClick={() => {
          if (Session.get("CheckoutHistory") != undefined) {
            setHistory(Session.get("CheckoutHistory"));
          }
        }}
        className="bg-[red] p-6 text-white"
      >
        getHistory 
      </button>
    </div>
  );
}

export default History;
