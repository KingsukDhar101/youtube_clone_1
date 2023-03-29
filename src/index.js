import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./_base.scss";

const rootElem = document.getElementById("root");

// create root
const root = ReactDOM.createRoot(rootElem);

// render
root.render(<App />);
