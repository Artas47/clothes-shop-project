import { SET_USER } from "./types";

export const setUser = (userId, userData) => {
  return {
    type: SET_USER,
    payload: { userId, ...userData }
  };
};
