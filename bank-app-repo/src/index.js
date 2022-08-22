import React from "react";
import ReactDOM from "react-dom/client";
import DashboardPage from "./Components/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/ProfilePage";
import Pricing from "./Components/Pricing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
