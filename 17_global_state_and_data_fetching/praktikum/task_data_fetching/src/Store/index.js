import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./Feature/TodoReducer";

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
