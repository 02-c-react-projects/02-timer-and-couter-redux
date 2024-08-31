const redux = require("redux");

// import counter reducer function here
const { timerReducer } = require("./redux/reducers/timerReducer");

// combine the reducer functions here
import { counterReducer } from "./redux/reducers/counterReducer";
import { combineReducers } from "redux";

const result=combineReducers({
    counterReducer,
    timerReducer
})
// add the root reducer function to store here
export const store = redux.createStore(result);
