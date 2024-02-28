import React from 'react';

const Juego = ({ juego }) => {
  return (
    <li>
      {juego.nombre} - {juego.empresa}
    </li>
  );
};

export default Juego;