import { combineReducers } from "redux";
import sections from "./sectionsReducer";
import shopData from "./shopReducer";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./userReducer";
import cart from "./cartReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  sections: sections,
  shopData: shopData,
  form: formReducer,
  user: user,
  cart: cart
});

export default persistReducer(persistConfig, rootReducer);
