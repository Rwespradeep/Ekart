import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./ProductsContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import ProfileContext from "./ProfileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ProfileContext>
          <Context>
            <App />
          </Context>
        </ProfileContext>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
