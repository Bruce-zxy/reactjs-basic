import { createStore, combineReducers, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";

import math from "./reducers/mathReducer"
import user from "./reducers/userReducer"

const myLogger = (store) => (next) => (action) => {
  console.log("Logged Action: ", action);
  next(action);
};

export default createStore(
  combineReducers({
    math: math,
    user: user
  }),
  {},
  applyMiddleware(
    myLogger,
    createLogger()
  )
);
