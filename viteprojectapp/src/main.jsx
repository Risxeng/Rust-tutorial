import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css"; // make sure this file exists

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

