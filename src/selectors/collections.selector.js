import { createSelector } from "reselect";

const selectCollections = state => state.collections;

// export const getCollectionsArray = createSelector(
//   //chaging collections object to an array
//   [selectCollections],
//   collections => Object.keys(collections).map(key => collections[key])
// );

export const getCollections = createSelector(
  [selectCollections],
  collections => (collections ? collections : [])
);
