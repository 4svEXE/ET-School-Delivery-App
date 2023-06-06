import React from "react";
import { useRoutes } from "react-router-dom";

import ShopPage from "./Shop";
import CartPage from "./Cart";
import HistoryPage from "./History";

const routesMap = [
  {
    path: "/",
    element: <ShopPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
];

const Routes = () => useRoutes(routesMap);

export default Routes;
