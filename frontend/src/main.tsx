import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Hooks/Auth/useAuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <Toaster />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
