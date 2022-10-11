import React from 'react';
import DinoPresenter from './DinoPresenter';


const DinoMapper = ({dinoArray}) => {
    return ( 
        <ul>
           {dinoArray.map(el => <li><DinoPresenter dino={el}/></li>)}
        </ul>
     );
}
 
export default DinoMapper;