import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaUsers,
  FaHome,
  FaUserShield,
  FaLock,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaShieldAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* Logo Section */}
      <div className="sidebar-logo">
        <FaUsers className="main-logo-icon" />

        <div>
          <h3>User Management</h3>
        </div>
      </div>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "sidebar-item active" : "sidebar-item"
        }
      >
        <FaHome />
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/users"
        className={({ isActive }) =>
          isActive ? "sidebar-item active" : "sidebar-item"
        }
      >
        <FaUsers />
        <span>Users</span>
      </NavLink>

      <NavLink
        to="/roles"
        className={({ isActive }) =>
          isActive ? "sidebar-item active" : "sidebar-item"
        }
      >
        <FaUserShield />
        <span>Roles</span>
      </NavLink>

      <NavLink
        to="/permissions"
        className={({ isActive }) =>
          isActive ? "sidebar-item active" : "sidebar-item"
        }
      >
        <FaLock />
        <span>Permissions</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "sidebar-item active" : "sidebar-item"
        }
      >
        <FaUser />
        <span>Profile</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? "sidebar-item active" : "sidebar-item"
        }
      >
        <FaCog />
        <span>Settings</span>
      </NavLink>

      <NavLink to="/" className="sidebar-item">
        <FaSignOutAlt />
        <span>Logout</span>
      </NavLink>

      {/* Secure Card */}
      <div className="secure-card">

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px"
          }}
        >
          <div className="secure-icon">
            <FaShieldAlt />
          </div>

          <h5
            style={{
              margin: 0,
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600"
            }}
          >
            Secure System
          </h5>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#9ca3af",
            fontSize: "12px",
            lineHeight: "18px",
            margin: 0
          }}
        >
          Your data is protected
          <br />
          with advanced security.
        </p>

      </div>

    </div>
  );
}

export default Sidebar;