import axios from "./axios.js";
export const ApiRegistrar = async (Valor) => {
  return await axios.post("deploy-backend-mern-mongodb-production.up.railway.app/api/register", Valor);
};

export const ApiLogin = async (valor) => {
  return await axios.post("deploy-backend-mern-mongodb-production.up.railway.app/api/login", valor);
};

export const VerificarToken = async () => {
  return await axios.get('deploy-backend-mern-mongodb-production.up.railway.app/api/verify')
}
