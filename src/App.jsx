import { useState } from 'react';
import Filtar from './assets/components/Filtar';
import Form from './assets/components/Form';
import Listar from './assets/components/Listar';
import './App.css';

const App = () => {
  const [notas, setNotas] = useState([]);

  const eliminarNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id)); 
  };

  const agregarNota = (nota) => {
    setNotas([...notas, nota]); 
  };

  return (
    <div className="App">
      <h1>Notas</h1>
      <Filtar notas={notas} />
      <Form agregarNota={agregarNota} />
      <Listar notas={notas} eliminarNota={eliminarNota} /> {/* Pasar la función eliminarNota */}
    </div>
  );
};

export default App;
