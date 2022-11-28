import React from "react";
import { CharCard } from "../CharCard";
import "./style.css"

export const Characters = ({ characterList }) => {
  return (
    <ul className="Characters">
      <li className="Characters-title">
        <h1>Meus Personagens</h1>{" "}
      </li>
      {characterList.map((elt) => (
        <CharCard key={elt.id} elt={elt} />
      ))}
    </ul>
  );
};
