import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const res = await fetch("http://localhost:5000/refresh-token", {
          credentials: "include",
          method: "POST",
        });
        if (res.ok) {
          const data = await res.json();
          setAccessToken(() => data.accessToken);
        } else {
          setAccessToken(null);
          console.error("res error");
        }
      } catch (error) {
        console.error("Token Refresh error:", error);
        setAccessToken(null);
      } finally {
        setIsLoading(false);
      }
    };
    refreshAccessToken();
  }, []);
  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
