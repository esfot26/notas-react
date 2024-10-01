import React, { useState } from 'react';

const Filtrar = ({ notas, filtrar }) => {
  const [prioridad, setPrioridad] = useState('all');
  const [notasFiltradas, setNotasFiltradas] = useState(notas); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const notasFiltradas = filtrarNotas(prioridad);
    setNotasFiltradas(notasFiltradas);
  };

  const filtrarNotas = (prioridad) => {
    if (prioridad === 'all') {
      return notas; 
    }
    return notas.filter((nota) => nota.prioridad === prioridad && nota.texto);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div >
          <select className='select-prioridad' value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
            <option value="all">TODAS</option>
            <option value="low">LOW</option>
            <option value="medium">MID</option>
            <option value="high">HIGH</option>
          </select>
        </div>
        <button type="submit">Filtrar</button>
      </form>
      <div className="notas-filtradas">
        {notasFiltradas.length > 0 ? (
          <ul>
            {notasFiltradas.map((nota) => (
              <li key={nota.id}>
                {nota.texto} - <strong>{nota.prioridad.toUpperCase()}</strong>
                
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay notas para la prioridad seleccionada.</p>
        )}
      </div>
    </div>
  );
};

export default Filtrar;
