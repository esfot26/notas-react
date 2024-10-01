import React, { useState } from 'react';

const Form = ({ agregarNota }) => {
  const [nota, setNota] = useState('');
  const [prioridad, setPrioridad] = useState('Low');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nota.trim()) {
      agregarNota({ titulo: nota, prioridad,id:Date.now()});
      setNota('');
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="form-nota">
      <input
        type="text"
        placeholder="Escribe tu nota"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        className="input-nota"
      />
      <select
        value={prioridad}
        onChange={(e) => setPrioridad(e.target.value)}
        className="select-prioridad"
      >
        <option value="Baja">Low</option>
        <option value="Media">Mid</option>
        <option value="Alta">High</option>
      </select>
      <button type="submit" className="btn-agregar">
        Agregar Nota
      </button>
    </form>
  );
};

export default Form;
