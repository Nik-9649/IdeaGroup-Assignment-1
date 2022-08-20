import React from "react";
import ReactDOM from "react-dom/client";
import DashboardPage from "./Components/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/ProfilePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<DashboardPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
