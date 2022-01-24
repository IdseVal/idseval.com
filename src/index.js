import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LangContextProvider } from "./store/lang-context";
import { AuthContextProvider } from "./store/auth-context";

import ScrollToTop from "./components/UI/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <AuthContextProvider>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
