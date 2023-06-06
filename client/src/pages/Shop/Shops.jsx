import React, { useState, useEffect } from "react";
import Session from "react-session-api";

import Button from "shared/components/button";

export default function Shops() {
  const [state, setState] = useState({
    shops: [
      { _id: "647ca85c8e5fe3fd59f80e83", title: "loading", isAviable: true },
    ],
  });

  async function getData(data) {
    fetch("/api/shops")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState({ shops: data });
      });

    if (!Session.get("shopID")) {
      Session.set("shopID", state.shops._id);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bordered-container h-full">
      <h3 className="text-3xl">Shops</h3>

      {state.shops.length > 0 && (
        <div className="flex flex-col">
          {state.shops.map(
            (shop, i) =>
              shop.isAviable && (
                <Button
                  key={i}
                  onClick={() => {
                    Session.set("shopID", shop._id);
                    console.log(shop._id, Session.get("shopID"));
                  }}
                  title={shop.title}
                  className="m-6 p-10"
                />
              )
          )}
        </div>
      )}
    </div>
  );
}
