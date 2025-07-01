import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRouteEmployer({ children }) {
  const { accessToken, isLoading } = useAuth();

  // Still loading or token not ready
  if (isLoading || !accessToken || typeof accessToken !== "string") {
    return (
      <div className="w-screen h-screen bg-gray-300 flex items-center justify-center">
        <span className="text-black text-3xl">...loading</span>
      </div>
    );
  }

  let decoded;
  try {
    decoded = jwtDecode(accessToken);
  } catch (error) {
    console.error("Invalid token:", error.message);
    return <Navigate to="/login" />;
  }

  // If the role is not employer, redirect
  if (decoded.role !== "employer") {
    return <Navigate to="/login" />;
  }

  return children;
}
