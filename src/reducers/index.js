import { combineReducers } from "redux";
import sections from "./sectionsReducer";
import collections from "./collectionsReducer";

export default combineReducers({
  sections: sections,
  collections: collections
});
