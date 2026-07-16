import React from "react";
import { FaBars, FaBell, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div
      className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center"
      style={{
        height: "85px",
        borderBottom: "1px solid #e5e7eb"
      }}
    >
      {/* Left Side */}
      <div className="d-flex align-items-center gap-4">
        <FaBars
          size={24}
          style={{
            color: "#374151",
            cursor: "pointer"
          }}
        />

        {/* Search Box */}
        <div
          className="border rounded-3 d-flex align-items-center px-3 bg-white"
          style={{
            width: "400px",
            height: "46px",
            borderColor: "#e5e7eb"
          }}
        >
          <input
            type="text"
            placeholder="Search here..."
            className="border-0 w-100"
            style={{
              outline: "none",
              fontSize: "14px",
              color: "#6b7280"
            }}
          />

          <FaSearch
            style={{
              color: "#9ca3af",
              fontSize: "16px"
            }}
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-4">

        {/* Notification */}
        <div
          style={{
            position: "relative",
            cursor: "pointer"
          }}
        >
          <FaBell
            size={20}
            style={{
              color: "#374151"
            }}
          />

          <span
            className="badge bg-primary rounded-circle d-flex align-items-center justify-content-center"
            style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              width: "20px",
              height: "20px",
              fontSize: "11px"
            }}
          >
            3
          </span>
        </div>

        {/* User Profile */}
        <div className="d-flex align-items-center gap-3">

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Taher"
            className="rounded-circle"
            width="45"
            height="45"
            style={{
              objectFit: "cover",
              border: "2px solid #f3f4f6"
            }}
          />

          <div>
            <div
              className="fw-bold"
              style={{
                fontSize: "18px",
                color: "#111827"
              }}
            >
              Taher
            </div>

            <small
              style={{
                color: "#6b7280",
                fontSize: "14px"
              }}
            >
              Admin
            </small>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;