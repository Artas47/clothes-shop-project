import { createSelector } from "reselect";

const selectCollections = state => state.shopData.collections;
const selectIsFetching = state => state.shopData.isFetching;

// export const getCollectionsArray = createSelector(
//   //chaging collections object to an array
//   [selectCollections],
//   collections => Object.keys(collections).map(key => collections[key])
// );

export const getCollections = createSelector(
  [selectCollections],
  collections => (collections ? collections : [])
);

export const getIsCollectionFetching = createSelector(
  [selectIsFetching],
  isFetching => isFetching
);
