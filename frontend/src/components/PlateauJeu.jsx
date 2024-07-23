import React, { useEffect, useState } from "react";
import "./plateauJeu.css";
import Card from "./Card";

export default function PlateauJeu() {
  const [playerHand, setPlayerHand] = useState([]);

  useEffect(() => {
    // Remplissage initial du deck
    fetch("http://localhost:4000/api/filldeck").then(() => {
      fetch("http://localhost:4000/api/starter").then(() => {
        fetch("http://localhost:4000/api/playerhand")
          .then((res) => res.json())
          .then((data) => setPlayerHand(data))
          .then(() => {
            fetch("http://localhost:4000/api/updatedeck", {
              method: "DELETE",
            });
          });
      });
    });
  }, []);

  useEffect(() => {
    // Récupération de la main du joueur après la distribution initiale
    fetch("http://localhost:4000/api/playerhand")
      .then((res) => res.json())
      .then((data) => setPlayerHand(data))
      .then(() => {
        fetch("http://localhost:4000/api/updatedeck", {
          method: "DELETE",
        });
      });
    console.info("first", playerHand);
  }, [JSON.stringify(playerHand)]);

  return (
    <div className="container">
      <div className="playerhand">
        <div className="slothands">
          <Card playerHand={playerHand} />
        </div>
      </div>
      <div className="scorePanel">
        <div className="scoretoreach">
          <p className="reachscore">300</p>Atteindre ce score
        </div>
        <p className="playerscorep">Score de la manche</p>
        <p className="playerscore">score</p>
        <div className="combinaisons">
          <p className="combname">nom combinaison</p>
          <div className="affichagepoints">
            <span className="points">points</span>
            <span>X</span>
            <span className="multi">multi</span>
          </div>
        </div>
        <div className="attempts">
          <span className="mains">mains</span>
          <span className="discard">discard</span>
        </div>
        <div className="options">
          <span className="infogame">info partie</span>
        </div>
      </div>

      <div className="jokerslot"> </div>
    </div>
  );
}

/* {
  playerHand.map((card) => (
    <img
      key={card.id}
      className="carte"
      src={`http://localhost:4000/${card.img}`}
      alt="carte"
    />
  ));
} */
