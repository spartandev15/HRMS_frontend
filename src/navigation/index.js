import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getDescription, getKeywords, getTitle } from "../helper/utilDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import LeaveManagement from "../pages/LeaveManagement"

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
      </Routes>
    </>
  );
};

export default Navigation;
