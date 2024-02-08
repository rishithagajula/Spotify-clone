import { combineReducers } from "redux";
import homeReducer from "../reducer/homeReducer";

const rootReducer = combineReducers({
  Home: homeReducer,
});

export default rootReducer;
