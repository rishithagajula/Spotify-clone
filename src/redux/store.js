import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"; 
import homeReducer from "../reducer/homeReducer";

const rootReducer = combineReducers({
  Home: homeReducer,
});

const middleware = [thunk]; 

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;



