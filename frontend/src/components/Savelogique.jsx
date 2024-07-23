// import React, { useEffect, useState } from "react";
import useMeilleureMain from "../../../backend/Hooks/useBestHand";

function App() {
  const mockSelectedCards = [
    { name: "10", valeur: 9, couleur: "Coeur", points: 10 },
    { name: "10", valeur: 9, couleur: "Coeur", points: 10 },
    { name: "10", valeur: 9, couleur: "Coeur", points: 9 },
    { name: "A", valeur: 13, couleur: "Coeur", points: 9 },
    { name: "A", valeur: 13, couleur: "Coeur", points: 11 },
  ];

  // Utilisez le hook useMeilleureMain pour identifier les meilleures mains
  const meilleuresMains = useMeilleureMain(mockSelectedCards);

  return (
    <div>
      {meilleuresMains.length > 0 ? (
        <div>
          <p>Meilleures mains identifiées:</p>
          <ul>
            {meilleuresMains.map((main, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{main.nomCartes}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Aucune meilleure main identifiée</p>
      )}
    </div>
  );
}

export default App;
