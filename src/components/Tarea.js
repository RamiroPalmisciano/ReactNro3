import React from "react";
import { Link } from "react-router-dom";
import './Tarea.css';

const Tarea = ({ tarea }) => {
  return (
    <div className="tarea">
      <h3>{tarea.titulo}</h3>
      <p>{tarea.descripcion}</p>
      <Link to={`/tarea/${tarea.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Tarea;
