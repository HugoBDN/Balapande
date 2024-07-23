/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function Card({ playerHand }) {
  const [selectedCardIds, setSelectedCardIds] = useState([]);

  const handleSelectedCards = (cardId) => {
    setSelectedCardIds((prevIds) => {
      if (prevIds.length < 5 || prevIds.includes(cardId)) {
        // Vérifie si le nombre de cartes sélectionnées est inférieur à 5 OU si la carte est déjà sélectionnée
        if (prevIds.includes(cardId)) {
          // Si la carte est déjà sélectionnée, la retirer des cartes sélectionnées
          return prevIds.filter((id) => id !== cardId);
        } else {
          // Sinon, ajouter la carte aux cartes sélectionnées
          return [...prevIds, cardId];
        }
      } else {
        // Si le nombre de cartes sélectionnées est déjà égal à 5, ne rien faire
        return prevIds;
      }
    });
  };
  console.info("selectedcards", selectedCardIds);

  return (
    <>
      {playerHand.map((card) => (
        <img
          key={card.id}
          className={`carte ${
            selectedCardIds.includes(card.id) ? "togglecarte" : ""
          }`}
          src={`http://localhost:4000/${card.img}`}
          alt="carte"
          onClick={() => handleSelectedCards(card.id)}
        />
      ))}
    </>
  );
}
