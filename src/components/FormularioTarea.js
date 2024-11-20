import React, { useState } from "react";
import './FormularioTarea.css';

const FormularioTarea = ({ agregarTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [completada, setCompletada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea({ titulo, descripcion, completada });
    setTitulo("");
    setDescripcion("");
    setCompletada(false);
  };

  return (
    <form className="formulario-tarea" onSubmit={handleSubmit}>
      <h2>Crear Nueva Tarea</h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={completada}
          onChange={() => setCompletada(!completada)}
        />
        Completada
      </label>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default FormularioTarea;
