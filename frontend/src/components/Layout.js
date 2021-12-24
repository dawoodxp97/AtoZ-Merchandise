import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="chi1">
        <Header />
      </div>
      <div className="chi2">
        <div className="main_wrapper">
          <div className="main_chi1">
            <Sidebar />
          </div>
          <main className="main_chi2">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
