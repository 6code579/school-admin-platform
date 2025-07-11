import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout, getToken } from "../services/Auth.jsx";
const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!getToken();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  return (
    <>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Accueil</Link>
        <Link to="/students" style={{ marginLeft: "1rem" }}>
          Liste des étudiants
        </Link>
        {" | "}
        {isAuthenticated ? (
          <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>
            Se déconnecter
          </button>
        ) : (
          <div>
            <Link to="/login">Se connecter</Link> <Link to="/login" style={{ marginLeft: "1rem" }}>
              Se connecter
            </Link>
            <Link to="/register" style={{ marginLeft: "1rem" }}>
              S'inscrire
            </Link>
          </div>

        )}
      </nav>
      <Outlet />
    </>
  )
}

export { Navbar }