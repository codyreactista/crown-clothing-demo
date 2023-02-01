import { createSelector } from "reselect";

import type { RootState } from "../store";
import type { CategoriesState } from "./categories.reducer";
import type { CategoryMap } from "./categories.types";

const selectCategoriesReducer = (state: RootState): CategoriesState => {
  // console.log("selector 1 fired");

  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => {
    // console.log("selector 2 fired");

    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    // console.log("selector 3 fired");

    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;

      return acc;
    }, {} as CategoryMap);
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
