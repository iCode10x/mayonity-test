import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="flex font-poppins">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <App />
      </div>
    </div>
  </React.StrictMode>,
);
