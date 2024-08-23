import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getDescription, getKeywords, getTitle } from "../helper/utilDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import LeaveManagement from "../pages/employee/LeaveManagement";
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
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import EmployeeHome from "../pages/employee/EmployeeHome";
import Announcements from "../pages/employee/home/Announcements";
import Calendar from "../pages/employee/home/Calendar";
import PersonalInformation from "../pages/employee/profile/PersonalInformation";
import ContactInformation from "../pages/employee/profile/ContactInformation";
import EmergencyContacts from "../pages/employee/profile/EmergencyContacts";
import ApplyForLeave from "../pages/employee/leave&attendance/ApplyForLeave";
import LeaveBalance from "../pages/employee/leave&attendance/LeaveBalance";
import AttendanceHistory from "../pages/employee/leave&attendance/AttendanceHistory";
import LeaveHistory from "../pages/employee/leave&attendance/LeaveHistory";
import PendingLeave from "../pages/manager/Leave/PendingLeave";
import AddEvent from "../pages/manager/AddEvent";
import MyProfile from "../pages/manager/MyProfile";
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
        <Route path="/admin_dashboard" element={<AdminDash />}>
          <Route path="" element={<AdminHome />} />
          <Route path="all_employee" element={<AllEmployee />} />
          <Route path="add_employee" element={<AddEmployee />} />
          <Route path="employee_birthday" element={<EmployeeBirthday />} />
          <Route
            path="employee_work_anniversary"
            element={<EmployeeWorkAnniversary />}
          />
          <Route
            path="provisional_employee"
            element={<ProvisionalEmployee />}
          />
          <Route path="category" element={<Category />} />
          <Route path="paid_leave" element={<PaidLeave />} />
          <Route path="unpaid_leave" element={<UnpaidLeave />} />
          <Route path="pending_leave" element={<PendingLeave />} />
          <Route path="over_time" element={<OverTime />} />
          <Route path="documents" element={<Documents />} />
          <Route path="add_event" element={<AddEvent />} />
          <Route path="vacancy" element={<Vacancy />} />
          <Route path="schedule_interview" element={<ScheduleInterview />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="employee_detail" element={<ViewEmployeeDetail />} />
        </Route>
        <Route path="/employee_dashboard" element={<EmployeeHome />}>
          <Route path="" element={<EmployeeDashboard />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="personal_information" element={<PersonalInformation />} />
          <Route path="contact_information" element={<ContactInformation />} />
          <Route path="emergency_contacts" element={<EmergencyContacts />} />
          <Route path="apply_for_leave" element={<ApplyForLeave />} />
          <Route path="leave_balance" element={<LeaveBalance />} />
          <Route path="attendance_history" element={<AttendanceHistory />} />
          <Route path="leave_history" element={<LeaveHistory />} />
          <Route path="myProfile" element={<MyProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
