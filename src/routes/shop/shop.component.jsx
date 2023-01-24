import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { setCategories } from "../../store/categories/categories.action";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const categoryArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoryArray));
    })();
  }, [dispatch]);

  return <Outlet />;
};

export default Shop;
