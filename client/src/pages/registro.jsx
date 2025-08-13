import { useForm } from "react-hook-form";
import { UseAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Registro() {
  const location = useLocation();
  const navigate = useNavigate();
  const { RegistroUsuario, isAuthenticated, errores, SetErrores } = UseAuth();
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
    try {
      await RegistroUsuario(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(Submiting)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        {Array.isArray(errores)
          ? errores.map((error, i) => (
              <div key={i} className="text-red-600 text-sm mb-2">
                {error.message}
              </div>
            ))
          : errores && (
              <div className="text-red-600 text-sm mb-2">{errores.message}</div>
            )}
        <h2 className="text-2xl font-bold mb-6 text-center">Registrate</h2>
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
            type="text"
            {...register("correo", {
              required: "La direcion de e-mail es obligatoria",
            })}
            placeholder="correo"
          />
          {errors.correo && (
            <p className="text-red-500 text-sm mt-1">
              se necesita ingresar un correo
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
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
        >
          enviar{" "}
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Ya tienes una cuenta?{" "}
          <Link to={"/login"} className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Registro;
