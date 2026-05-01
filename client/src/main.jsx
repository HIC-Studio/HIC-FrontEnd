import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
//import Header from "./components/header.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/prices" element={<h1>Prices</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  </BrowserRouter>,
);
