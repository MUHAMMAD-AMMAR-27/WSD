// noinspection JSValidateTypes

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
import AdminDashboardPage from "../pages/dashboard/AdminDashboardPage.jsx"
export const App = () => {
  return (
    <Router>
      <Routes>
       {/* <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />*/}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/adminDashboard" element={<AdminDashboardPage />} />
      </Routes>
    </Router>
  );
};
