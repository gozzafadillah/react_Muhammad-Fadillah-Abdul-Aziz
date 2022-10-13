import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ConfigRoutes from "./routes/ConfigRoutes";
import { persistor, store } from "./Store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigRoutes />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
