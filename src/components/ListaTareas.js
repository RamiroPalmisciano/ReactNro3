import React from "react";
import Tarea from "./Tarea";
import './ListaTareas.css';

const ListaTareas = ({ tareas }) => {
  return (
    <div className="lista-tareas">
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
};

export default ListaTareas;
