import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Store from "./store/Store.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
