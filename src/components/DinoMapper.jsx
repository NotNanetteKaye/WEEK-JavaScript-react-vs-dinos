import React from 'react';


const DinoMapper = ({dinoArray}) => {
    return ( 
        <ul>
           {dinoArray.map(dino => <li>Hello</li>)}
        </ul>
     );
}
 
export default DinoMapper;