import React from 'react';

const Listar = ({ notas, eliminarNota }) => {
  return (
    <div>
      <h1>Lista de notas</h1>
      {notas.length === 0 ? (
        <p>No hay notas disponibles.</p>
      ) : (
        <div className="notas">
          {notas.map(nota => (
            <div key={nota.id} className="nota-item">
              <p>
                {nota.titulo} - {nota.prioridad}
              </p>
              <button 
                className="eliminar-btn" 
                onClick={() => eliminarNota(nota.id)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Listar;
