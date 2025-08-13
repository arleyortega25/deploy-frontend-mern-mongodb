import axios from "./axios.js";

export const ApiTareaGet = async () => {
  return await axios.get("deploy-backend-mern-mongodb-production.up.railway.app/api/tareas");
};

export const  ApiTareaPost = async (task) => {
  return await axios.post("deploy-backend-mern-mongodb-production.up.railway.app/api/tareas", task);
};

export const ApiTareaGetById = (id) => {
  return axios.get(`deploy-backend-mern-mongodb-production.up.railway.app/api/tareas/${id}`);
};
export const ApiTareaDelete = (id) => {
  return axios.delete(`deploy-backend-mern-mongodb-production.up.railway.app/api/tareas/${id}`);
};
export const ApiTareaPut = (id, task) => {
  return axios.put(`deploy-backend-mern-mongodb-production.up.railway.app/api/tareas/${id}`, task);
};
