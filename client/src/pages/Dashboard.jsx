
import React from "react";
import {
  FaUsers,
  FaUserPlus,
  FaUserShield,
  FaUserTimes,
  FaEye,
  FaEdit,
  FaTrash
} from "react-icons/fa";

function Dashboard() {
  const users = [
    {
      id: 1,
      name: "Taher Patrawala",
      email: "taher@example.com",
      role: "Admin",
      status: "Active",
      joined: "01 May 2024"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Editor",
      status: "Active",
      joined: "10 May 2024"
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      role: "User",
      status: "Active",
      joined: "15 May 2024"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      role: "User",
      status: "Inactive",
      joined: "20 May 2024"
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      role: "User",
      status: "Active",
      joined: "25 May 2024"
    }
  ];

  const cards = [
    {
      title: "Total Users",
      count: "128",
      icon: <FaUsers />,
      color: "#6d5cff",
      textColor: "#22c55e",
      text: "↑ 12.5% from last month"
    },
    {
      title: "Active Users",
      count: "96",
      icon: <FaUserPlus />,
      color: "#16a34a",
      textColor: "#22c55e",
      text: "↑ 8.2% from last month"
    },
    {
      title: "Admins",
      count: "12",
      icon: <FaUserShield />,
      color: "#f59e0b",
      textColor: "#22c55e",
      text: "↑ 5.1% from last month"
    },
    {
      title: "Inactive Users",
      count: "20",
      icon: <FaUserTimes />,
      color: "#ef4444",
      textColor: "#ef4444",
      text: "↓ 3.4% from last month"
    }
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Header */}

      <h2
        style={{
          fontWeight: 700,
          fontSize: "34px",
          color: "#111827",
          marginBottom: "5px"
        }}
      >
        Dashboard
      </h2>

      <p
        style={{
          color: "#64748b",
          fontSize: "13px",
          marginBottom: "25px"
        }}
      >
        Home / Dashboard
      </p>

      {/* Statistics Cards */}

      <div className="row g-4">
        {cards.map((item, index) => (
          <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
            <div
              className="card border-0 shadow-sm rounded-4 p-4"
              style={{
                height: "140px",
                overflow: "hidden"
              }}
            >
              <div className="d-flex justify-content-between align-items-center h-100">
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#64748b"
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      fontSize: "42px",
                      fontWeight: 700,
                      color: "#111827",
                      lineHeight: 1.1
                    }}
                  >
                    {item.count}
                  </div>

                  <div
                    style={{
                      fontSize: "11px",
                      color: item.textColor,
                      whiteSpace: "nowrap"
                    }}
                  >
                    {item.text}
                  </div>
                </div>

                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    color: item.color,
                    fontSize: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Users Table */}

      <div className="card border-0 shadow-sm rounded-4 mt-4">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#1f2937",
                margin: 0
              }}
            >
              Users
            </h3>

            <button
              className="btn text-white"
              style={{
                background:
                  "linear-gradient(90deg,#6d5cff,#4f46e5)",
                borderRadius: "12px",
                padding: "9px 22px",
                fontSize: "14px",
                border: "none"
              }}
            >
              + Add User
            </button>
          </div>

          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr
                  style={{
                    fontSize: "13px",
                    color: "#6b7280"
                  }}
                >
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined On</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    style={{
                      fontSize: "13px",
                      color: "#374151"
                    }}
                  >
                    <td>{user.id}</td>

                    <td>{user.name}</td>

                    <td>{user.email}</td>

                    <td>
                      <span
                        style={{
                          background: "#f3f4f6",
                          padding: "5px 10px",
                          borderRadius: "20px",
                          fontSize: "11px",
                          fontWeight: 600
                        }}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td>
                      <span
                        style={{
                          background:
                            user.status === "Active"
                              ? "#dcfce7"
                              : "#fee2e2",
                          color:
                            user.status === "Active"
                              ? "#16a34a"
                              : "#ef4444",
                          padding: "5px 12px",
                          borderRadius: "20px",
                          fontSize: "11px",
                          fontWeight: 600
                        }}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td>{user.joined}</td>

                    <td>
                      <div className="d-flex gap-2">
                        <button
                          style={{
                            width: "28px",
                            height: "28px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#f3f4f6",
                            color: "#4f46e5",
                            fontSize: "11px"
                          }}
                        >
                          <FaEye />
                        </button>

                        <button
                          style={{
                            width: "28px",
                            height: "28px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#fef3c7",
                            color: "#f59e0b",
                            fontSize: "11px"
                          }}
                        >
                          <FaEdit />
                        </button>

                        <button
                          style={{
                            width: "28px",
                            height: "28px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#fee2e2",
                            color: "#ef4444",
                            fontSize: "11px"
                          }}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;