import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { API } from "../config/config";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const { accessToken } = useAuth();

  const handleSave = async (updatedData) => {
    let options = {
      method: "PUT",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    if (updatedData.resume && updatedData.resume[0]) {
      const formData = new FormData();
      formData.append("resume", updatedData.resume[0]);
      options.body = formData;
    } else {
      options.body = JSON.stringify(updatedData);
      options.headers["Content-Type"] = "application/json";
    }
    const res = await fetch(`${API}/profile`, options);
    if (res.ok) {
      const data = await res.json();
      setUserData(data.updated);
      alert(data.message);
    }
  };

  useEffect(() => {
    const handleToken = async () => {
      const res = await fetch(`${API}/profile`, {
        credentials: "include",
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUserData(data);
      }
    };
    handleToken();
  }, [accessToken]);

  return <UserContext.Provider value={{ handleSave, userData, setUserData }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
