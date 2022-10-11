import React from 'react';
import DinoPresenter from './DinoPresenter';


const DinoMapper = ({dinoArray}) => {
    return ( 
        <ul>
           {dinoArray.map(dino => <li><DinoPresenter/></li>)}
        </ul>
     );
}
 
export default DinoMapper;