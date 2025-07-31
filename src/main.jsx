import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyContext from "../context/MyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MyContext>
  </BrowserRouter>
);
