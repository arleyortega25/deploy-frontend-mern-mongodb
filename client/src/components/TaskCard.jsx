import { UseTask } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
function TaskCard(props) {
  const navigate = useNavigate();
  const { EliminarTareas } = UseTask();
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-4 w-full max-w-md mx-auto">
      <h1 className="text-xl font-semibold text-gray-800 mb-2">
        {props.task.titulo}
      </h1>
      <h1 className="text-gray-600 mb-4">{props.task.descripcion}</h1>
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          onClick={() => {
            navigate(`/tareas/${props.task._id}`);
          }}
        >
          Editar
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          onClick={() => {
            EliminarTareas(props.task._id);
          }}
        >
          Eliminar
        </button>
      </div>
      <p className="text-sm text-gray-400">
        {new Date(props.task.fecha).toLocaleDateString()}
      </p>
    </div>
  );
}

export default TaskCard;
