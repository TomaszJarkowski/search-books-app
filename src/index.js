import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BooksProvider from "./context/BookContext";
import "./scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BooksProvider>
      <App />
    </BooksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
