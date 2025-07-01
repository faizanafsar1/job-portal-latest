import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { API } from "../config/config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const res = await fetch(`${API}/refresh-token`, {
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
