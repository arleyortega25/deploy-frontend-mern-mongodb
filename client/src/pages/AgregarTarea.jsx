import { useForm } from "react-hook-form";
import { UseTask } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function AgregarTarea() {
  const navigate = useNavigate();
  const { CrearTareas } = UseTask();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Submiting = async (value) => {
    await CrearTareas(value);
    navigate("/tareas");
  };

  return (
    <div className="min-h-screen bg-zinc-800 flex items-center justify-center px-4 ">
      <form onSubmit={handleSubmit(Submiting)} className="bg-zinc-900 p-6 rounded-xl w-full max-w-md shadow-lg">
        <div className="my-3">
            <h2 className="text-neutral-400 text-3xl text-center font-bold">Agregar una nueva tarea</h2>
            <input className="w-full bg-neutral-100 p-3 rounded-lg text-black placeholder-gray-500 my-3"
              type="text"
              placeholder="titulo"
              {...register("titulo", {
                required: "el titulo es requerido",
              })}
            />
            {errors.titulo && <p className="text-red-700">es necesario ingresar un titulo</p>}
            <textarea className="w-full bg-neutral-100 p-3 rounded-lg text-black placeholder-gray-500"
              placeholder="descripcion"
              {...register("descripcion", {
                required: "la descripcion es requerida",
              })}
            ></textarea>
        </div>
        {errors.descripcion && <p className="text-red-700">es necesario ingresar una descripcion</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition " >enviar</button>
      </form>
    </div>
  );
}

export default AgregarTarea;
