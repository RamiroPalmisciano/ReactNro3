import React, { useState } from "react";
import FormularioTarea from "../components/FormularioTarea";
import tareasData from "../data/tarea";

const CrearTarea = () => {
  const [tareas, setTareas] = useState(tareasData);

  const agregarTarea = (nuevaTarea) => {
    const tareaConId = { ...nuevaTarea, id: tareas.length + 1 };
    setTareas([...tareas, tareaConId]);
  };

  return (
    <div>
      <FormularioTarea agregarTarea={agregarTarea} />
    </div>
  );
};

export default CrearTarea;
