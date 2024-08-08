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
import AdminHome from "../pages/manager/AdminHome";
import Checklist from "../pages/manager/Checklist";
import TimeOff from "../pages/manager/TimeOff";
import Attendance from "../pages/manager/Attendance";
import Profile from "../pages/manager/Profile"; 
import ViewEmployeeDetail from "../pages/manager/ViewEmployeeDetail";
import AllEmployee from "../pages/manager/Employee/AllEmployee";
import AddEmployee from "../pages/manager/Employee/AddEmployee";
import EmployeeBirthday from "../pages/manager/Employee/EmployeeBirthday";
import EmployeeWorkAnniversary from "../pages/manager/Employee/EmployeeWorkAnniversary";
import ProvisionalEmployee from "../pages/manager/Employee/ProvisionalEmployee";
import Category from "../pages/manager/Employee/Category";
import PaidLeave from "../pages/manager/Leave/PaidLeave";
import UnpaidLeave from "../pages/manager/Leave/UnpaidLeave";
import OverTime from "../pages/manager/OverTime";
import Documents from "../pages/manager/Documents";
import Vacancy from "../pages/manager/Recruitment/Vacancy";
import ScheduleInterview from "../pages/manager/Recruitment/ScheduleInterview";
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
          <Route path="all_employee" element={<AllEmployee />} />
          <Route path="add_employee" element={<AddEmployee />} />
          <Route path="employee_birthday" element={<EmployeeBirthday />} />
          <Route path="employee_work_anniversary" element={<EmployeeWorkAnniversary />} />
          <Route path="provisional_employee" element={<ProvisionalEmployee/>} />
          <Route path="category" element={<Category />} />
          <Route path="paid_leave" element={<PaidLeave />} />
          <Route path="unpaid_leave" element={<UnpaidLeave />} />
          <Route path="over_time" element={<OverTime />} />
          <Route path="documents" element={<Documents />} />
          <Route path="vacancy" element={<Vacancy />} />
          <Route path="schedule_interview" element={<ScheduleInterview />} />
          <Route path="viewPersonalDetails" element={<ViewEmployeeDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
