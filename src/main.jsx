import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductContext from "./Components/ProductContext.jsx";
import Star from "../src/Components/Star.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContext>
      <App />
    </ProductContext>
  </React.StrictMode>
);
