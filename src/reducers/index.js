import { combineReducers } from "redux";
import sections from "./sectionsReducer";
import collections from "./collectionsReducer";
import { reducer as formReducer } from "redux-form";
import user from "./userReducer";
import cart from "./cartReducer";

export default combineReducers({
  sections: sections,
  collections: collections,
  form: formReducer,
  user: user,
  cart: cart
});
