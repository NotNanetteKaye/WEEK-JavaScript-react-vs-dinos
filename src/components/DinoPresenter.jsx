import React from 'react';

const DinoPresenter = ({dino}) => {
    return ( 
        <li>
        <div>
            <h2>{dino.name}</h2>
            <p>{dino.type}</p>
            <p>{dino.size}</p>
        </div>
        </li>
     );
}
 
export default DinoPresenter;