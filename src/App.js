import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { setCurrentUser } from "./store/user/user.action";

import Authentication from "./routes/authentication/authentication.component";
import CategoriesPreview from "./routes/categories-preview/categories-preview.component";
import Category from "./routes/category/category.component";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

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
        path: "shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <CategoriesPreview />,
          },
          {
            path: ":shopId",
            element: <Category />,
          },
        ],
      },
      {
        path: "auth",
        element: <Authentication />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
