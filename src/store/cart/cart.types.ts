import type { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  TOGGLE_CART_DROPDOWN = "cart/TOGGLE_CART_DROPDOWN",
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_TOTAL = "cart/SET_CART_TOTAL",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
