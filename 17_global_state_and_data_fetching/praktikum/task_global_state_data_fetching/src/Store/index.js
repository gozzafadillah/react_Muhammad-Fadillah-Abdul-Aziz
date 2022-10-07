import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Feature/TodoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
