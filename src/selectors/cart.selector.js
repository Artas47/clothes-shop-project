import { createSelector } from "reselect";

const selectCart = state => state.cart;
const selectCartItems = state => state.cart.cartItems;

export const getCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const getCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const getCartItemsQuantity = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((sum, item) => {
      return (sum = sum + item.quantity);
    }, 0)
);

export const getCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((sum, item) => {
      return (sum = sum + item.price * item.quantity);
    }, 0)
);
