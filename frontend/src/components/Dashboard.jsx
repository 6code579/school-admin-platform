import React from "react";
import { logout } from "../services/Auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bienvenue dans la zone protégée !</p>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export { Dashboard };
