import axios from "./axios.js";
export const ApiRegistrar = async (Valor) => {
  return await axios.post("http://localhost:3000/api/register", Valor);
};

export const ApiLogin = async (valor) => {
  return await axios.post("http://localhost:3000/api/login", valor);
};

export const VerificarToken = async () => {
  return await axios.get('http://localhost:3000/api/verify')
}
