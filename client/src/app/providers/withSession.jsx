import React, { useEffect } from "react";
import crypto from "crypto-js";

import Session from "react-session-api";

export default function WithLayout({ children }) {
  useEffect(() => {
    if (Session.get("userID") != undefined) {
      // console.log("user", Session.get("userID"));
    } else {
      const hash = crypto.MD5(new Date());
      Session.set("userID", hash + "anonUser");
    }

    if (Session.get("cart") != undefined) {
      // console.log("with Cart", Session.get("cart"));
    } else {
      Session.set("cart", {});
    }
  }, []);

  return <>{children}</>;
}
