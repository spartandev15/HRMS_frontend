import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../component/layout/Layout";

const EmployeeHome = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default EmployeeHome;
