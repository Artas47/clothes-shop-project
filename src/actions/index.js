import { SET_USER, TOGGLE_CART } from "./types";

export const setUser = (userId, userData) => {
  return {
    type: SET_USER,
    payload: { userId, ...userData }
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  };
};
