import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";

const App = () => (
  <>
    <h1>react-mfe</h1>
    <BrowserRouter basename="react">
      <div>
        <Link to="/first">First</Link>

        <Link to="/second" style={{ marginLeft: "20px" }}>
          Second
        </Link>
      </div>
      <h3 style={{ color: "green" }}>React routes</h3>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>

    {/* Add more links here */}
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
