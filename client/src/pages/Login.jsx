import { useForm } from "react-hook-form";
import { UseAuth } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { FuncionLogin, errores, SetErrores, isAuthenticated } = UseAuth();
  useEffect(() => {
    if (isAuthenticated) navigate("/tareas");
  }, [isAuthenticated]);

  useEffect(() => {
    SetErrores([]);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Submiting = async (values) => {
    await FuncionLogin(values);
    
    // window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {Array.isArray(errores)
        ? errores.map((error, i) => <div key={i}>{error.message}</div>)
        : errores && <div>{errores.message}</div>}
      <form
        onSubmit={handleSubmit(Submiting)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <div className="mb-4">
          <input
            className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            {...register("usuario", {
              required: "nombre de usuario es obligatorio",
            })}
            placeholder="usuario"
          />
          {errors.usuario && (
            <p className="text-red-500 text-sm mt-1">
              se necesita ingresar un usuario
            </p>
          )}
        </div>
        <div className="mb-4">
          <input
            className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            {...register("contraseña", {
              required: "es obligatorio digitar la contraseña",
            })}
            placeholder="contraseña"
          />
          {errors.contraseña && (
            <p className="text-red-500 text-sm mt-1">
              se necesita ingresar una contraseña
            </p>
          )}
        </div>
        <button
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          type="submit"
        >
          enviar{" "}
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          No tienes una cuenta aun ?{" "}
          <Link to={"/registro"} className="text-blue-600 hover:underline">
            Registrate
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
