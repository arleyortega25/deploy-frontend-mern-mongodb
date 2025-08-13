import axios from "./axios.js";


export const ApiTareaGet = async () => {
  return await axios.get("https://deploy-backend-mern-mongodb-production.up.railway.app/api/tareas",{ withCredentials: true });
};

export const  ApiTareaPost = async (task) => {
  return await axios.post("https://deploy-backend-mern-mongodb-production.up.railway.app/api/tareas", task,{ withCredentials: true });
};

export const ApiTareaGetById = (id) => {
  return axios.get(`https://deploy-backend-mern-mongodb-production.up.railway.app/api/tareas/${id}`,{ withCredentials: true });
};
export const ApiTareaDelete = (id) => {
  return axios.delete(`https://deploy-backend-mern-mongodb-production.up.railway.app/api/tareas/${id}`,{ withCredentials: true });
};
export const ApiTareaPut = (id, task) => {
  return axios.put(`https://deploy-backend-mern-mongodb-production.up.railway.app/api/tareas/${id}`, task,{ withCredentials: true });
};
