import React from "react";
import "dotenv/config"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <script
      src="https://unpkg.com/react/umd/react.production.min.js"
      crossOrigin="true"
    ></script>

    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      crossOrigin="true"
    ></script>

    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossOrigin="true"
    ></script>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
