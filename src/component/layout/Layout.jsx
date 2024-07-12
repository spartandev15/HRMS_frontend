import React from "react"; 
import "../../asset/css/dashboard.css"; 
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
  <>
  <Header />
  {children}
  <Footer />
    </> 
  );
};

export default Layout;
