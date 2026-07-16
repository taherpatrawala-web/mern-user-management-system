// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Roles from "./pages/Roles";
// import Permissions from "./pages/Permissions";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";

// import MainLayout from "./layout/MainLayout";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Login />} />

//         <Route element={<MainLayout />}>

//           <Route
//             path="/dashboard"
//             element={<Dashboard />}
//           />

//           <Route
//             path="/users"
//             element={<Users />}
//           />

//           <Route
//             path="/roles"
//             element={<Roles />}
//           />

//           <Route
//             path="/permissions"
//             element={<Permissions />}
//           />

//           <Route
//             path="/profile"
//             element={<Profile />}
//           />

//           <Route
//             path="/settings"
//             element={<Settings />}
//           />

//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route element={<MainLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;