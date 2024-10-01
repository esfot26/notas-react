import React from 'react';

const Eliminar = ({ eliminarNota }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        eliminarNota()
    }

    return (
        <form onSubmit={handleSubmit}>
            <button id='eliminar' type="submit">
                Eliminar nota
            </button>
        </form>
    );
};
export default Eliminar;