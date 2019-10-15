import { combineReducers } from "redux";
import sections from "./sectionsReducer";
import collections from "./collectionsReducer";
import { reducer as formReducer } from "redux-form";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./userReducer";
import cart from "./cartReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["cart"]
};

const rootReducer = combineReducers({
  sections: sections,
  collections: collections,
  form: formReducer,
  user: user,
  cart: cart
});

export default persistReducer(persistConfig, rootReducer);
