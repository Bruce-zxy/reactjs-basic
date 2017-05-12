import { createStore, combineReducers, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import reddit from "./reducers/redditReducer";

// const myLogger = (store) => (next) => (action) => {
//   console.log("Logged Action: ", action);
//   next(action);
// };

export default createStore(
  combineReducers({
    math: math,
    user: user,
    reddit: reddit
  }),
  {},
  applyMiddleware(
//    myLogger,
    createLogger(),
    thunk,
    promise()
  )
);
