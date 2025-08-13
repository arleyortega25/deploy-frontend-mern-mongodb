import { createContext, useContext, useState } from "react";
import {
  ApiTareaDelete,
  ApiTareaGet,
  ApiTareaGetById,
  ApiTareaPost,
  ApiTareaPut,
} from "../api/tasks.api.js";
import { BuscarIDTarea } from "../../../src/controllers/tareas.controllers.js";

export const TaskContext = createContext();
export const UseTask = () => {
  return useContext(TaskContext);
};

export function TaskProvider(props) {
  const [tarea, SetTarea] = useState([]);

  const VerTareas = async () => {
    try {
      const response = await ApiTareaGet();

      SetTarea(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const CrearTareas = async (task) => {
    try {
      const response = await ApiTareaPost(task);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const EliminarTareas = async (id) => {
    try {
      const res = await ApiTareaDelete(id);
      if (res.status === 204) SetTarea(tarea.filter((t) => t._id !== id));
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  const BuscarTareaId = async (id) => {
    try {
      const res = await ApiTareaGetById(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const ActualizarTarea = async (id, data) => {
    await ApiTareaPut(id, data);
  };

  return (
    <div>
      <TaskContext.Provider
        value={{
          VerTareas,
          CrearTareas,
          tarea,
          EliminarTareas,
          BuscarTareaId,
          ActualizarTarea,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </div>
  );
}
