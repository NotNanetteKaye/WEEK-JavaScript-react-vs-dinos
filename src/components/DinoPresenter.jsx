import React from 'react';

const DinoPresenter = ({dino}) => {
    return ( 
        <li className={dino.type === "Herbivore" ? 'herbi' : 'carni'}>
        <div>
            <h2>{dino.name}</h2>
            <p>{dino.type}</p>
            <p>{dino.size}</p>
        </div>
        </li>
     );
}
 
export default DinoPresenter;

