import { createStore } from "redux";
import rootReducers from "./combineReducer";

const Store = createStore(rootReducers)

export default Store;