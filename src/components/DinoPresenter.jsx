import React from "react";
import HeadingSecondary from "./HeadingSecondary";

const DinoPresenter = ({ dino }) => {
  return (
    <li className={dino.type === "Herbivore" ? "herbi" : "carni"}>
      <div>
        <HeadingSecondary 
            dinoName={dino.name} 
            dinoPhrase={dino.catchphrase}
        />
        <p>{dino.type}</p>
        <p>{dino.size}</p>
      </div>
    </li>
  );
};

export default DinoPresenter;
