import TaskCard from "../components/TaskCard";
import { UseTask } from "../context/TaskContext";
import { useEffect } from "react";

function Tarea() {
  const { VerTareas, tarea } = UseTask();
  const { isAuthenticated } = UseAuth();
  useEffect(() => {
    if (isAuthenticated) {
      VerTareas();
    }
  }, [isAuthenticated]);

  return (
     <div>
      {tarea.length > 0 ? (
        tarea.map((t) => <TaskCard task={t} key={t._id} />)
      ) : (
        <p>No hay tareas</p>
      )}
    </div>
  );
}

export default Tarea;
