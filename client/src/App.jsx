import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import ApplyJob from "./pages/applyjob/ApplyJob";
import PostJob from "./pages/postjob/PostJob";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import ProtectedRouteJobSeeker from "./components/ProtectedRouteJobSeeker";
import ProtectedRouteEmployer from "./components/ProtectedRouteEmployer";
import EmployerDashboard from "./pages/employer-dashboard/EmployerDashboard";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <Routes>
      {/* protected routes for employer */}
      <Route
        path="/postjob"
        element={
          <ProtectedRouteEmployer>
            <PostJob />
          </ProtectedRouteEmployer>
        }
      ></Route>
      <Route
        path="/employer-dashboard"
        element={
          <ProtectedRouteEmployer>
            <EmployerDashboard />
          </ProtectedRouteEmployer>
        }
      ></Route>
      {/* protected routes for jobseeker */}
      <Route
        path="/profile"
        element={
          <ProtectedRouteJobSeeker>
            <Profile />
          </ProtectedRouteJobSeeker>
        }
      ></Route>
      <Route
        path="/applyjob/:id"
        element={
          <ProtectedRouteJobSeeker>
            <ApplyJob />
          </ProtectedRouteJobSeeker>
        }
      ></Route>

      {/* open routes */}

      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
