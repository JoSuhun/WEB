import React from "react"; // esModuleInterop: true
import ReactDOM from "react-dom/client"; // esModuleInterop: true
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
