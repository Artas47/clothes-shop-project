import { createSelector } from "reselect";

const selectUser = state => state.user;

export const getUser = createSelector(
  [selectUser],
  user => user
);
