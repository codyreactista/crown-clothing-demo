import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartProvider } from "./contexts/cart.context";
import { ProductsProvider } from "./contexts/products.context";
import { UserProvider } from "./contexts/user.context";

import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";

import reportWebVitals from "./reportWebVitals";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/auth",
        element: <Authentication />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
