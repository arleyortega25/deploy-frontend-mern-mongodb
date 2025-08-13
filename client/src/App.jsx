import "./App.css";
import { Route, Routes } from "react-router-dom";

import Registro from "./pages/registro";
import Tarea from "./pages/tarea";
import BuscarTarea from "./pages/BuscarTarea";
import AgregarTarea from "./pages/AgregarTarea";
import Usuario from "./pages/usuario";
import Login from "./pages/login";
import HomePage from "./pages/HomePage";
import ProteccionPaginas from "./components/ProteccionPaginas";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-zinc-700 h-screen">
        <Navbar  />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route element={<ProteccionPaginas />}>
            <Route path="/tareas" element={<Tarea />} />
            <Route path="/tareas/add" element={<AgregarTarea />} />
            <Route path="/tareas/:id" element={<BuscarTarea />} />
            <Route path="/usuario" element={<Usuario />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
