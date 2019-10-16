import { createSelector } from "reselect";

const selectCollections = state => state.collections;

export const getCollections = createSelector(
  [selectCollections],
  collections => collections
);
