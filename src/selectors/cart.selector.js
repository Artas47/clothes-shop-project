import { createSelector } from "reselect";

const selectCart = state => state.cart;
const selectCartItems = state => state.cart.cartItems;

export const getCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const getCartItemsQuantity = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((sum, item) => {
      return (sum = sum + item.quantity);
    }, 0)
);
