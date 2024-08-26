import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../../component/layout/Layout";

const EmployeeHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    } else {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default EmployeeHome;
