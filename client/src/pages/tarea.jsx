import TaskCard from "../components/TaskCard";
import { UseTask } from "../context/TaskContext";
import { useEffect } from "react";

function Tarea() {
  const { VerTareas, tarea } = UseTask();
  useEffect(() => {
    VerTareas();
  }, []);

  return (
    <div>
      {tarea.map((t) => {
        return <TaskCard task={t} key={t._id} />;
      })}
    </div>
  );
}

export default Tarea;
