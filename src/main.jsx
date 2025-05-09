import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SplashPage from "./SplashPage.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
