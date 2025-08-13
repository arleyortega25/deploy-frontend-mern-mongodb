import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";
function ProteccionPaginas() {
  const { isAuthenticated, cargando } = UseAuth();
  if (cargando) return <div>cargando...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProteccionPaginas;
