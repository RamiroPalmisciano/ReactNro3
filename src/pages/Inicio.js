import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListaTareas from "../components/ListaTareas";
import tareasData from "../data/tarea";

const Inicio = () => {
  const [tareas, setTareas] = useState(tareasData);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ListaTareas tareas={tareas} />
      <Link to="/crear">Crear nueva tarea</Link>
    </div>
  );
};

export default Inicio;
