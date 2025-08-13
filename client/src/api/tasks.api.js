import axios from "./axios.js";
const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); // o sessionStorage
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const ApiTareaGet = async () => {
  return await axios.get("https://deploy-backend-mern-mongodb-production.up.railway.app/api/tareas",getAuthHeaders());
};

export const  ApiTareaPost = async (task) => {
  return await axios.post("https://deploy-backend-mern-mongodb-production.up.railway.app/api/tareas", task,getAuthHeaders());
};

export const ApiTareaGetById = (id) => {
  return axios.get(`https://deploy-backend-mern-mongodb-production.up.railway.app/api/tareas/${id}`,getAuthHeaders());
};
export const ApiTareaDelete = (id) => {
  return axios.delete(`https://deploy-backend-mern-mongodb-production.up.railway.app/api/tareas/${id}`,getAuthHeaders());
};
export const ApiTareaPut = (id, task) => {
  return axios.put(`https://deploy-backend-mern-mongodb-production.up.railway.app/api/tareas/${id}`, task,getAuthHeaders());
};
