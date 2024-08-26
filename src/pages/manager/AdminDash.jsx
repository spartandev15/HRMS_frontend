import React, { useEffect } from "react";
import Layout from "../../component/layout/Layout";
import user from "../../asset/images/account.png";
import { Outlet, useNavigate } from "react-router-dom";
import { GET_PROFILE } from "../../api/Api";

const AdminDash = () => {
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
        <Outlet/>
      </Layout>
    </>
  );
};

export default AdminDash;
