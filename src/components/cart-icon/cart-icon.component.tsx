import { useDispatch, useSelector } from "react-redux";

import { toggleCartDropdown } from "../../store/cart/cart.action";
import { selectCartCount } from "../../store/cart/cart.selector";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(toggleCartDropdown());

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
