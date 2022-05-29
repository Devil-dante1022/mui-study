import { applyMiddleware, compose, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"
import filterReducer from "./reducer/filterReducer";

const rootReducer = combineReducers({
  fliter: filterReducer
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
