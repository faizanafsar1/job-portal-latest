import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { EmployerProvider } from "./context/EmployerContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UserProvider>
      <EmployerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </EmployerProvider>
    </UserProvider>
  </AuthProvider>
);
