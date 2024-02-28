import React, { useState } from 'react';

const Form = ({ onAgregarJuego }) => {
  const [nuevoJuego, setNuevoJuego] = useState({ nombre: '', empresa: '' });

  const agregarJuego = () => {
    if (nuevoJuego.nombre && nuevoJuego.empresa) {
      onAgregarJuego({ id: Date.now(), ...nuevoJuego });
      setNuevoJuego({ nombre: '', empresa: '' });
    if (nuevoJuego.nombre.length < 3 && nuevoJuego.empresa.length < 6) {
         setShow(true)
    }  else{
        setShow(false)
    }
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Juego</h2>
      <input
        type="text"
        placeholder="Nombre del juego"
        value={nuevoJuego.nombre}
        onChange={(e) => setNuevoJuego({ ...nuevoJuego, nombre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Empresa"
        value={nuevoJuego.empresa}
        onChange={(e) => setNuevoJuego({ ...nuevoJuego, empresa: e.target.value })}
      />
      <button onClick={agregarJuego}>Agregar Juego</button>
    </div>
  );
};

export default Form;