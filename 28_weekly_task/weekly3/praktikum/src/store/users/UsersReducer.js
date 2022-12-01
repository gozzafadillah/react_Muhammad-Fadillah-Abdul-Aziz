import { combineReducers } from "@reduxjs/toolkit";
import user from "./UsersSlicer";

const rootReducers = combineReducers({
  user,
});

export default rootReducers;
