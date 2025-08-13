import { Link } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, LogOut, user } = UseAuth();
  return (
    <div className="bg-zinc-800 text-neutral-400   ">
      <ul className="flex justify-between my-3 mx-2 py-3">
        <li>
          <Link to={"/"} className="text-2xl font-bold hover:text-white">
            YourTask.com
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <p>Bienvenido {user.usuario} </p>
            </li>
            <div className="flex justify-between mx-3 px-3  ">
              <li className="hover:text-white">
                <Link to={"/tareas"}>Lista de Tareas</Link>
              </li>
              <li className="mx-5 hover:text-white">
                <Link to={"/tareas/add"}>Agregar Nuevas Tareas</Link>
              </li>
              <li>
                <button
                  onClick={LogOut}
                  className="bg-red-500 text-black rounded-xl text-2xs p-1 mx-3"
                >
                  cerrar Sesion{" "}
                </button>
              </li>
            </div>
          </>
        ) : (
          <>
            <li>
              <Link to={"/registro"}>Registrarse</Link>
            </li>
            <li>
              <Link to={"/login"}>Iniciar Sesion</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
