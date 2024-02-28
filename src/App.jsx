import React, { useState } from 'react';
import Form from './Components/Form';
import Juego from './Components/Juegos';

const App = () => {
  const [juegos, setJuegos] = useState([
    { id: 1, nombre: 'The Legend of Zelda: Breath of the Wild', empresa: 'Nintendo' },
    { id: 2, nombre: 'Red Dead Redemption 2', empresa: 'Rockstar Games' },
    { id: 3, nombre: 'Cyberpunk 2077', empresa: 'CD Projekt' },
    { id: 4, nombre: 'Fortnite', empresa: 'Epic Games' },
    { id: 5, nombre: 'Minecraft', empresa: 'Mojang' }
  ]);

  const agregarJuego = (nuevoJuego) => {
    setJuegos([...juegos, nuevoJuego]);
  };

  return (
    <div>
      <h1>Registro de Juegos</h1>
      <ul>
        {juegos.map((juego) => (
          <Juego key={juego.id} juego={juego} />
        ))}
      </ul>
      <Form onAgregarJuego={agregarJuego} />
    </div>
  );
};

export default App;
