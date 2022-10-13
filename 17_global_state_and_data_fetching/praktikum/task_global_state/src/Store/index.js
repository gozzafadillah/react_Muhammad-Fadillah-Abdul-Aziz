import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./Feature/TodoReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const persistReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistReducers,
});

export const persistor = persistStore(store);
