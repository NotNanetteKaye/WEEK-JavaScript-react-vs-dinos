import React, { useState } from 'react';
import DinoMapper from "./components/DinoMapper";

const App = () => {
  const [dinos, setDinos] = useState([
    {
      id: 1,
      name: 'Nanette-saurus',
      type: 'Herbivore',
      size: 'Extra Large',
      catchphrase: 'ah',

    },
    {
      id: 2,
      name: 'Nanette-saurus',
      type: 'Carnivore',
      size: 'Extra Large',
      catchphrase: 'ah',

    },
    {
      id: 3,
      name: 'Nanette-saurus',
      type: 'Omnivore',
      size: 'Extra Large',
      catchphrase: 'ah',
    },
    {
      id: 4,
      name: 'Nanette-saurus',
      type: 'Herbivore',
      size: 'Extra Large',
      catchphrase: 'ah',
    },
    {
      id: 5,
      name: 'Nanette-saurus',
      type: 'Herbivore',
      size: 'Extra Large',
      catchphrase: 'ah',
    },
  ])

  return (
    <div>
      <h1>Dinosaurs!</h1>
      <DinoMapper dinoArray={dinos}/>
    </div>
  )


}

 
export default App;

