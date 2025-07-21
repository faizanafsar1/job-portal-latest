import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";
const ProtectedRouteJobSeeker = ({ children }) => {
  const { accessToken, loading } = useAuth();

  if (loading || accessToken === undefined) {
    return (
      <div className="w-screen h-screen bg-gray-300 ">
        <span className="text-center my-auto w-fit h-fit mx-auto text-black text-3xl">
          ...loading
        </span>
      </div>
    );
  }

  if (accessToken) {
    const decoded = jwtDecode(accessToken);
    if (decoded.role === "employer") {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  } else if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRouteJobSeeker;
