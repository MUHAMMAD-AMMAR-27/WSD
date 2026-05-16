// noinspection JSValidateTypes

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
import AdminDashboardPage from "../pages/AdminDashboardPage/AdminDashboardPage.jsx"
import DummyDrawer from "../pages/dashboard/DummyDrawer.jsx";
import AddDepartment from "../pages/AdminDashboardPage/AdminSideDrawer/AddDepartment.jsx";
import AddSubjects from "../pages/AdminDashboardPage/AdminSideDrawer/AddSubjects.jsx";
export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />*/}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/adminDashboard/addDepartment" element={<AddDepartment />} />
        <Route path="/dummyDashboard" element={<DummyDrawer />} />
        <Route path="/adminDashboard" element={<AdminDashboardPage />} />
        <Route path="/adminDashboard/addSubject" element={<AddSubjects />} />
      </Routes>
    </Router>
  );
};
