import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Authstate from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authstate>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Authstate>
);
