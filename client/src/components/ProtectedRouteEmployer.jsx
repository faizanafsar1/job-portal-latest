import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export default function ProtectedRouteEmployer({ children }) {
  const { accessToken, isLoading } = useAuth();
  // const [delay, setDelay] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDelay(false);
  //   }, 300);
  // });
  if (isLoading || accessToken === undefined) {
    return (
      <div className="w-screen h-screen bg-gray-300 flex items-center justify-center">
        <span className="text-black text-3xl">...loading</span>
      </div>
    );
  }
  if (accessToken) {
    const decoded = jwtDecode(accessToken);
    if (decoded.role === "jobseeker") {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  } else if (!accessToken) {
    return <Navigate to="/login" />;
  }
}
