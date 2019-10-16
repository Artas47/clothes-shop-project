import { createSelector } from "reselect";

const selectCollection = (state, ownProps) =>
  state.collections.find(collection => {
    return (
      collection.title.toLowerCase() === ownProps.match.params.collectionTitle
    );
  });

export const getCollection = createSelector(
  [selectCollection],
  collection => collection
);
