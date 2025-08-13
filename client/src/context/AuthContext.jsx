import { createContext, useContext, useState, useEffect } from "react";
import { ApiRegistrar, ApiLogin, VerificarToken } from "../api/auth.api.js";
import Cookies from "js-cookie";
export const ContextoAutenticacion = createContext();
export const UseAuth = () => {
  return useContext(ContextoAutenticacion);
};

export function AuthContext(props) {
  const [cargando, setCargando] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, SetUser] = useState(null);
  const [errores, SetErrores] = useState([]);
  const RegistroUsuario = async (valor) => {
    try {
      const res = await ApiRegistrar(valor);

      SetUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);

      SetErrores(error.response?.data || { message: "error desconocido" });
    }
  };
  const FuncionLogin = async (valor) => {
    try {
      const res = await ApiLogin(valor);

      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
      SetErrores(error.response?.data || { message: "error desconocido" });
    }
  };
  useEffect(() => {
    const VerificarLogin = async () => {
      const cookie = Cookies.get();
      if (cookie.token) {
        try {
          const res = await VerificarToken();
          if (res.data) {
            setIsAuthenticated(true);
            SetUser(res.data);
            console.log("token funcionando");
          } else {
            setIsAuthenticated(false);
            SetUser(null);
          }
        } catch (error) {
          console.log(error);
          setIsAuthenticated(false);
          SetUser(null);
        }
      }
      setCargando(false);
    };
    VerificarLogin();
  }, []);
  const LogOut = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    SetUser(null);
  };

  return (
    <>
      <ContextoAutenticacion.Provider
        value={{
          RegistroUsuario,
          isAuthenticated,
          user,
          errores,
          FuncionLogin,
          SetErrores,
          cargando,
          LogOut,
        }}
      >
        {props.children}
      </ContextoAutenticacion.Provider>
    </>
  );
}
