import { combineReducers } from "@reduxjs/toolkit";
import todo from "./TodoSlice";

const rootReducers = combineReducers({
  todo,
});

export default rootReducers;
