import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "160px", // EXACT sidebar width
          minHeight: "100vh",
          background: "#f5f7fb"
        }}
      >
        <Navbar />

        <div
          style={{
            padding: "30px"
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;