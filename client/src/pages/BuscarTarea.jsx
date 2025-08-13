import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { UseTask } from "../context/TaskContext";
function BuscarTarea() {
  const navigate = useNavigate();
  const { BuscarTareaId, ActualizarTarea } = UseTask();
  const Params = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const Submiting = async (data) => {
    await ActualizarTarea(Params.id, data);
    navigate("/tareas");
  };
  useEffect(() => {
    const CargarInput = async () => {
      if (Params.id) {
        try {
          const task = await BuscarTareaId(Params.id);
          
          setValue("titulo", task.titulo);
          setValue("descripcion", task.descripcion);
        } catch (error) {
          console.error(error);
        }
      }
    };
    CargarInput();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-700 p-4">
      <form className="bg-zinc-800 shadow-md rounded-xl p-6 w-full max-w-md" onSubmit={handleSubmit(Submiting)}>
        <div className="mb-4">
            <input
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="titulo"
              {...register("titulo", {
                required: "el titulo es requerido",
              })}
            />
            {errors.titulo && <p className="text-red-500 text-sm mt-1">es necesario ingresar un titulo</p>}
        </div>

        <div className="mb-4">
            <textarea
            className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="descripcion"
              {...register("descripcion", {
                required: "la descripcion es requerida",
              })}
            ></textarea>
            {errors.descripcion && <p className="text-red-500 text-sm mt-1">es necesario ingresar una descripcion</p>}
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default BuscarTarea;
