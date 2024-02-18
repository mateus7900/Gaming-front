import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";

import "./styles.scss";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.tsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
