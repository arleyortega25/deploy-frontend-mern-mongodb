import axios from "./axios.js";

export const ApiTareaGet = async () => {
  return await axios.get("http://localhost:3000/api/tareas");
};

export const  ApiTareaPost = async (task) => {
  return await axios.post("http://localhost:3000/api/tareas", task);
};

export const ApiTareaGetById = (id) => {
  return axios.get(`http://localhost:3000/api/tareas/${id}`);
};
export const ApiTareaDelete = (id) => {
  return axios.delete(`http://localhost:3000/api/tareas/${id}`);
};
export const ApiTareaPut = (id, task) => {
  return axios.put(`http://localhost:3000/api/tareas/${id}`, task);
};
