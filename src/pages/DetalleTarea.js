import React from "react";
import { useParams } from "react-router-dom";
import tareasData from "../data/tarea";

const DetalleTarea = () => {
  const { id } = useParams();
  const tarea = tareasData.find((t) => t.id === parseInt(id));

  return (
    <div>
      <h1>Detalle de la Tarea</h1>
      <h2>{tarea.titulo}</h2>
      <p>{tarea.descripcion}</p>
      <p>{tarea.completada ? "Completada" : "Incompleta"}</p>
    </div>
  );
};

export default DetalleTarea;
