import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="navbar">This is navbar section</div>

      <div className="main">This is main section</div>

      <div className="products">This is products section</div>

      <div className="contact">This is contact section</div>

      <div className="footer">This is footer section</div>
    </div>
  </React.StrictMode>
);
