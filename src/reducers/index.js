import { combineReducers } from "redux";
import sections from "./sectionsReducer";
import shopData from "./shopReducer";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./userReducer";
import cart from "./cartReducer";
import isLoading from "./loadingReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["cart"]
};

const rootReducer = combineReducers({
  sections: sections,
  shopData: shopData,
  form: formReducer,
  user: user,
  cart: cart,
  isLoading: isLoading
});

export default persistReducer(persistConfig, rootReducer);
