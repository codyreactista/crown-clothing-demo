import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartProvider } from "./contexts/cart.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { UserProvider } from "./contexts/user.context";

import Authentication from "./routes/authentication/authentication.component";
import CategoriesPreview from "./routes/categories-preview/categories-preview.component";
import Category from "./routes/category/category.component";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

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
        element: <CategoriesPreview />,
      },
      {
        path: "/shop/:shopId",
        element: <Category />,
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
  <UserProvider>
    <CategoriesProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </CategoriesProvider>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
