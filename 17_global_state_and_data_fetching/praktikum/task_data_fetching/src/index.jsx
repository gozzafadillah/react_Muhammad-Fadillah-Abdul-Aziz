import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ConfigRoutes from "./routes/ConfigRoutes";
import store from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigRoutes />
    </Provider>
  </React.StrictMode>
);
