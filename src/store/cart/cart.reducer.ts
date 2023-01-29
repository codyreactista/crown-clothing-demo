import { AnyAction } from "redux";

import { CartItem } from "./cart.types";

import { setCartItems, toggleCartDropdown } from "./cart.action";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (toggleCartDropdown.match(action)) {
    return {
      ...state,
      isCartOpen: !state.isCartOpen,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
