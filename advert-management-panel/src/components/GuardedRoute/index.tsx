import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PANEL_PASSWORD = "recruitment";

const GuardedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem("isAuthenticated");
  
    if (!isAuthenticated) {
      const userInput = prompt("Podaj hasło, aby uzyskać dostęp do panelu:");
      if (userInput === PANEL_PASSWORD) {
        localStorage.setItem("isAuthenticated", "true");
      } else {
        return <Navigate to="/error" state={{ from: location }} replace />;
      }
    }
  
    return isAuthenticated ? <>{children}</> : null;
};

export default GuardedRoute;
