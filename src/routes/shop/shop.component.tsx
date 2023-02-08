import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { fetchCategoriesStart } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Outlet />;
};

export default Shop;
