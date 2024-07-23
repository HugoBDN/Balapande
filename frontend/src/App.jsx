/* eslint-disable no-nested-ternary */
import React from "react";
import useBrelan from "../../backend/Hooks/useBrelan";
import usePaire from "../../backend/Hooks/usePaire";
import useDoublePaire from "../../backend/Hooks/useDoublePaire";
import useQuinte from "../../backend/Hooks/useQuinte";
import useCouleur from "../../backend/Hooks/useFlush";
import useFullHouse from "../../backend/Hooks/useFullHouse";
import useCarre from "../../backend/Hooks/useCarré";
import useQuinteFlush from "../../backend/Hooks/useQuinteFlush";
import useQuinteFlushRoyale from "../../backend/Hooks/useRoyalQuinteFlush";
import useFlushFullHouse from "../../backend/Hooks/useFlushFullHouse";

function App() {
  const mockSelectedCards = [
    { name: "10", valeur: 9, couleur: "Coeur", points: 10 },
    { name: "10", valeur: 9, couleur: "Coeur", points: 10 },
    { name: "10", valeur: 9, couleur: "Coeur", points: 9 },
    { name: "A", valeur: 13, couleur: "Coeur", points: 9 },
    { name: "A", valeur: 13, couleur: "Coeur", points: 11 },
  ];

  const estFlushFullHouse = useFlushFullHouse(mockSelectedCards);

  return (
    <div>
      {estFlushFullHouse ? (
        Array.isArray(estFlushFullHouse.nomCartes) ? (
          <p>oui voici la carte [{estFlushFullHouse.nomCartes.join(", ")}]</p>
        ) : (
          <p>oui voici la carte [{estFlushFullHouse.nomCartes}]</p>
        )
      ) : (
        <p>t'as rien mec</p>
      )}
    </div>
  );
}

export default App;
