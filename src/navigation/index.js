import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getDescription, getKeywords, getTitle } from "../helper/utilDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import LeaveManagement from "../pages/employee/LeaveManagement";
import EmpDashboard from "../pages/employee/EmpDashboard";
import AdminDashboard from "../pages/manager/Admindashboard";
import AdminDash from "../pages/manager/AdminDash";
import EmployeeManagement from "../pages/manager/EmployeeManagement";
import AdminHome from "../pages/manager/AdminHome";
import Checklist from "../pages/manager/Checklist";
import TimeOff from "../pages/manager/TimeOff";
import Attendance from "../pages/manager/Attendance";
import Recruitment from "../pages/manager/Recruitment";
import Profile from "../pages/manager/Profile"; 
import ViewEmployeeDetail from "../pages/manager/ViewEmployeeDetail";
// import EmployeeManagement from "../pages/manager/EmployeeManagement";

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{getTitle(location.pathname)}</title>
        <meta name="description" content={getDescription(location.pathname)} />
        <meta name="keywords" content={getKeywords(location.pathname)} />
      </Helmet>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leave" element={<LeaveManagement />} />
        <Route path="/dashboard" element={<AdminDash />}>
          <Route path="" element={<AdminHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="manage_employee" element={<EmployeeManagement />} />
          <Route path="checklist" element={<Checklist />} />
          <Route path="timeoff" element={<TimeOff />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="viewPersonalDetails" element={<ViewEmployeeDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
