// noinspection JSValidateTypes

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
import AdminDashboardPage from "../pages/AdminDashboardPage/AdminDashboardPage.jsx"
import DummyDrawer from "../pages/dashboard/DummyDrawer.jsx";
import AddDepartment from "../pages/AdminDashboardPage/AdminSideDrawer/AddDepartment.jsx";
import AddSubjects from "../pages/AdminDashboardPage/AdminSideDrawer/AddSubjects.jsx";
import DepartmentExam from "../pages/Exam/DepatmentExam.jsx";
import SubDepartmentExam from "../pages/Exam/SubDepartmentExam.jsx"
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
        <Route path="/exam" element={<DepartmentExam />} />
        <Route path="/exam/:departmentId" element={<SubDepartmentExam />} />

        <Route path="/adminDashboard/addSubject" element={<AddSubjects />} />
      </Routes>
    </Router>
  );
};
