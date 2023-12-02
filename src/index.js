import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/AuthContext";
import { FirebaseContextProvider } from "./store/FirebaseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FirebaseContextProvider>
          <App />
        </FirebaseContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
