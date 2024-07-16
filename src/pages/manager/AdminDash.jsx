import React, { useEffect } from "react";
import Layout from "../../component/layout/Layout";
import user from "../../asset/images/account.png";
import { Outlet, useNavigate } from "react-router-dom";

const AdminDash = () => {
  // const navigate = useNavigate();
  // const name = localStorage.getItem("userName");

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <>
      <Layout>
        <Outlet/>
      </Layout>
    </>
  );
};

export default AdminDash;
